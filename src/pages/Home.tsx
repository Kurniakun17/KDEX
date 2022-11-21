import { Box, Center, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import DataCardsList from '../components/DataCardsList'

type PokeDatasProps = {
    PokeDatas:{
        name:string
        url:string
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

export default function Home({PokeDatas}:PokeDatasProps) {
    const [pokemons, setPokemons] = useState<PokeData>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const itemlength = 30;

    let pageCount, state;

    useEffect(() => {
        let data = PokeDatas.slice(offset,offset+itemlength)
        getPoke(data);
        setLoading(false);
    }, []);


    async function fetchPoke(url: string) {
        fetch(url).then((res) => res.json())
            .then((res) => {
                getPoke(res.results);
                setLoading(false)
            }).catch((error) => {
                console.log(error);
            })
        }

    const getPoke = async (datas:{name:string, url:string}[]) => {
        console.log(datas);
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

    const handlePageClick=(event:{selected:number})=>{
        setPokemons([]);
        const offset=event.selected*30;
        getPoke(PokeDatas.slice(offset, offset+itemlength))
    }

    if (loading) {
        return <Center><h1>Loading...</h1></Center>
    }

    pageCount=Math.ceil(1154/30)

    return (
            <Center>
                <Flex flexDir={"column"} w="100%">
                    <Input></Input>
                    <Heading>Pokédex</Heading>
                    <DataCardsList datas={pokemons}></DataCardsList>
                    <Center>
                        <Box bgColor={"#FFF"} borderRadius={"10px"}>
                            <Center>
                                <ReactPaginate className='paginate'
                                    breakLabel="..."
                                    nextLabel="Next >"
                                    onPageChange={(e)=>(handlePageClick(e))}
                                    pageRangeDisplayed={3}
                                    pageCount={pageCount}
                                    previousLabel="< Previous"
                                />
                            </Center>
                        </Box>
                    </Center>
                </Flex>
            </Center>
    )
}
