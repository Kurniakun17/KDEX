import { Box, Flex, Heading} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { upperCase } from '../utils'
import DetailedTabs from './DetailedTabs'

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
    stats:{
        base_stat:number
    }[]
    // forms: { url: string }[]
}

export default function DetailedCard({ name, abilities, sprites, types, weight, stats }: DataProps) {
    const [formsData, setFormsData] = useState([]);
    const [speciesData, setSpeciesData] = useState([]);

    useEffect(() => {
        
    }, [])

    // const fetch = async(name:string)=>{
    //     Axios.get('')
    // } 


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
                        <Heading display={"block"}>{upperCase(name)}</Heading>
                    </Box>
                    <DetailedTabs stats={stats}></DetailedTabs>
                    {/* <Box display={"block"}>
                        <Text size={"md"} fontWeight="500">Abilities : {abilities.map((element)=><span key={`${name}-${element.ability.name}`}>{element.ability.name}, </span>)}</Text>
                        <Text>Weight: {weight} kg</Text>
                        <Center>
                            <Flex alignItems={"center"}>
                                <Text >Types :</Text>
                                <TypesCard types={types}></TypesCard>
                            </Flex>
                        </Center>
                    </Box> */}
                </Box>
            </Box>
        </Flex>
    )
}
