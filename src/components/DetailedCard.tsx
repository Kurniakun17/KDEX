import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { upperCase } from '../utils'

type DataProps={
	name:string
	abilities:{
		ability:{
			name:string
		}
	}[]|undefined
	sprites:string
}

export default function DetailedCard({name, abilities, sprites}:DataProps) {
    return (
        <Flex flexDir={"column"} alignItems={"center"} color="white">
            <Box w={"30vh"} mb="1em">
                <img src={sprites} alt="" />
            </Box>
            <Box>
                <Heading display={"block"}>{upperCase(name)}</Heading>
            </Box>
            <Box display={"block"}>
                <Text size={"md"} fontWeight="500">Abilities : {abilities?.map((element, index)=><span key={`${name}-${element.ability.name}`}>{element.ability.name}, </span>)}</Text>
            </Box>
        </Flex>
    )
}
