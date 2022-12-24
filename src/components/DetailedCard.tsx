import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { upperCase } from '../utils'
import DetailedTabs from './DetailedTabs'
import Axios from 'axios'
import unknownpokeball from '../assets/UnknownPokeBall.png'

type DataProps = {
    data:{
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
        height:number
        stats: {
            base_stat: number
        }[]
        species: {
            url: string
        }
    }
}

type speciesDataProps = {
    flavor_text_entries: {
        flavor_text: string
    }[]
    habitat:{
        name:string
    }
    color:{
        name:string
    }
    is_baby:boolean
    is_legendary:boolean
    is_mythical:boolean
    evolution_chain:{
        url:string
    }
}

export default function DetailedCard({data}: DataProps) {
    const [speciesData, setSpeciesData] = useState<speciesDataProps>({} as speciesDataProps);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        Fetch(data.species.url)
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
                <Box w={"30vh"} mb="1em" color={"black"}>
                    <img src={data.sprites.other.home.front_default?data.sprites.other.home.front_default:unknownpokeball} alt={`${data.name}-image`} />
                </Box>
            </Box>
            <Box bgColor={"#FFF"} borderRadius="10px" p="30px 10px" w="100%">
                <Box textAlign={"center"} p="0em 1em">
                    <Box>
                        <Heading>{upperCase(data.name)}</Heading>
                        <Text fontStyle={"italic"}  m={"10px"}>"{speciesData.flavor_text_entries[0].flavor_text}"</Text>
                    </Box>
                    <DetailedTabs data={data} speciesData={speciesData}></DetailedTabs>
                </Box>
            </Box>
        </Flex>
    )
}
