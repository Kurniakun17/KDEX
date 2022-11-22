import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { upperCase } from '../utils'
import DetailedTabs from './DetailedTabs'
import Axios from 'Axios'
import TypesCard from '../components/TypesCard'

type DataProps = {
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
    types: {
        type: {
            name: string
        }
    }[]
    weight: number
    stats: {
        base_stat: number
    }[]
    species: {
        url: string
    }
}

type speciesDataProps = {
    flavor_text_entries: {
        flavor_text: string
    }[]
}

export default function DetailedCard({ name, abilities, sprites, types, weight, stats, species }: DataProps) {
    const [formsData, setFormsData] = useState([]);
    const [speciesData, setSpeciesData] = useState<speciesDataProps>({} as speciesDataProps);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        Fetch(species.url)
    }, [])

    const Fetch = async (url: string) => {
        Axios.get(url).then(res => res.data)
            .then((res) => {
                setSpeciesData(res)
                console.log(res)
                setLoading(false)
                return res
            })
    }

    if (loading) {
        return <Center>Loading . . .</Center>
    }

    return (
        <Flex flexDir={"column"} alignItems={"center"} w="100%">
            <Box>
                <Box w={"30vh"} mb="1em">
                    <img src={sprites.other.home.front_default} alt="" />
                </Box>
            </Box>
            <Box bgColor={"#FFF"} borderRadius="10px" p="30px 10px" w="100%">
                <Box textAlign={"center"} p="0em 1em">
                    <Box>
                        <Heading>{upperCase(name)}</Heading>
                        <Text m={"10px"}>"{speciesData.flavor_text_entries[0].flavor_text}"</Text>
                    </Box>
                    <DetailedTabs stats={stats} abilities={abilities} types={types} weight={weight} ></DetailedTabs>
                </Box>
            </Box>
        </Flex>
    )
}
