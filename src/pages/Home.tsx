import { Box, Center, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import DataCardsList from '../components/DataCardsList'

type PokeDatasProps = {
    PokeDatas: {
        name: string
        url: string
    }[]
}

type PokeData = {
    name: string
    abilities: {
        ability: {
            name: string
        }
    }[]
    sprites: {
        other: {
            home: {
                front_default: string
            }
        }
    }
    id: number
    types: {
        type: {
            name: string
        }
    }[]
}[]

export default function Home({ PokeDatas }: PokeDatasProps) {
    const [PokeSource, setPokeSource] = useState(PokeDatas)
    const [pokemons, setPokemons] = useState<PokeData>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [value, setValue] = useState("");
    const [pageCount, setPageCount] = useState(Math.ceil(PokeDatas.length/30))

    const itemlength = 30;

    let state;

    useEffect(() => {
        let data = PokeSource.slice(offset, offset + itemlength);
        getPoke(data);
        setLoading(false);
    }, []);

    const getPoke = async (datas: { name: string, url: string }[]) => {
        setPokemons([]);
        datas.map(async (data) => {
            fetch(data.url).then((res) => res.json())
                .then((res) => {
                    setPokemons((prevState) => {
                        state = [...prevState, res]
                        state.sort((a, b) => a.id > b.id ? 1 : -1)
                        return state;
                    })
                })
        })
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        let filteredPoke = PokeDatas.filter((data) => { 
            return data.name.includes(e.target.value.toLowerCase())
        })
        setPokeSource(filteredPoke)
        setPageCount(Math.ceil(filteredPoke.length/30))
        getPoke(filteredPoke.slice(offset, offset+ itemlength))
    }

    const handlePageClick = (event: { selected: number }) => {
        const offset = event.selected * 30;
        getPoke(PokeSource.slice(offset, offset + itemlength))
        console.log(event.selected);
    }

    if (loading) {
        return <Center><h1>Loading. . .</h1></Center>
    }

    return (
        <Center>
            <Flex flexDir={"column"} w="100%">
                <Box mb="40px">
                    <Input value={value} onChange={onInputChange}></Input>
                </Box>
                <Heading>Pokédex</Heading>
                {pokemons.length === 0?<Center>
                        <Heading>Not found . . .</Heading>
                    </Center>:
                <>
                    <DataCardsList datas={pokemons}></DataCardsList>
                    <Center>
                        <Box bgColor={"#FFF"} borderRadius={"10px"} m="20px" p="10px">
                            <Center>
                                <ReactPaginate className='paginate'
                                    breakLabel="..."
                                    nextLabel="Next >"
                                    onPageChange={(e) => (handlePageClick(e))}
                                    pageRangeDisplayed={3}
                                    pageCount={pageCount}
                                    previousLabel="< Previous"
                                />
                            </Center>
                        </Box>
                    </Center>
                </>
                }
            </Flex>
        </Center>
    )
}
