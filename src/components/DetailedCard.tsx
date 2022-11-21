import { Box, Flex, Heading, Text,Center } from '@chakra-ui/react'
import React from 'react'
import { upperCase } from '../utils'

type DataProps={
	name:string
	abilities:{
		ability:{
			name:string
		}
	}[]
	sprites:string
}

export default function DetailedCard({name, abilities, sprites}:DataProps) {
    return (
        <Flex flexDir={"column"} alignItems={"center"}  w="100%">
            <Box>
                <Box w={"30vh"} mb="1em">
                    <img src={sprites} alt="" />
                </Box>
            </Box>
            <Box bgColor={"#FFF"} borderRadius="10px" p="30px 10px" w="100%">
                <Box textAlign={"center"}>
                    <Box>
                        <Heading display={"block"}>{upperCase(name)}</Heading>
                    </Box>
                    <Box display={"block"}>
                        <Text size={"md"} fontWeight="500">Abilities : {abilities.map((element)=><span key={`${name}-${element.ability.name}`}>{element.ability.name}, </span>)}</Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}
