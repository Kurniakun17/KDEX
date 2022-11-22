import { Box, Center, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import DataCardsList from '../components/DataCardsList'
import Axios from 'Axios';

type PokeDatasProps = {
    PokeDatas: {
        name: string
        url: string
    }[]
}

type PokeDataProps = {
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
    const [pokemons, setPokemons] = useState<PokeDataProps>([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get("search") || "");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(Math.ceil(PokeDatas.length / 30))
    const [PokeSource, setPokeSource] = useState(()=>{
        return value? PokeDatas.filter((data)=>data.name.includes(value.toLowerCase())):PokeDatas
    });
    
    const itemlength = 30;
    let state;

    useEffect(() => {
        setLoading(true);
        let datas = PokeSource.slice(currentPage * itemlength, currentPage * itemlength + itemlength)
        getPoke(datas);
        setLoading(false);
        return () => { return; }
    }, [value, currentPage]);

    const getPoke = (datas: { name: string, url: string }[]) => {
        setPokemons([]);
        datas.map(async (data) => {
            Axios.get(data.url).then(res => res.data)
                .then((res) => {
                    setPokemons((prevState) => {
                        state = [...prevState, res]
                        state.sort((a, b) => a.id > b.id ? 1 : -1)
                        return state;
                    })
                })
        })
    }

    const filterPoke = (val: string) => {
        let data = PokeDatas.filter((data) => data.name.includes(val.toLowerCase()))
        return data
    }

    const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokeSource([])
        setSearchParams({ "search": `${e.target.value}` });
        let filteredPoke = filterPoke(e.target.value)
        setPokeSource(filteredPoke)
        setPageCount(Math.ceil(filteredPoke.length / 30))
        setValue(e.target.value)
    }

    const handlePageClick = async (event: { selected: number }) => {
        console.log("clicked")
        setCurrentPage(event.selected)
    }

    if (loading) {
        return <Center><h1>Loading. . .</h1></Center>
    }

    return (
        <Center>
            <Flex flexDir={"column"} w="100%">
                <Box mb="40px">
                    <Heading fontSize={"xl"}>Which pokemon do you want to search?</Heading>
                    <Input value={value} onChange={onInputChange} placeholder="'Pikachu"></Input>
                </Box>
                <Heading>Pokédex</Heading>
                <DataCardsList datas={pokemons}></DataCardsList>
                <Center>
                    <Box overflow={"hidden"} p="10px">
                        <Center>
                            <ReactPaginate className='paginate'
                                breakLabel="..."
                                nextLabel="Next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                pageCount={pageCount}
                                previousLabel="< Previous"
                                forcePage={currentPage}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                activeClassName={"active-item"}
                            />
                        </Center>
                    </Box>
                </Center>
            </Flex>
        </Center>
    )
}
