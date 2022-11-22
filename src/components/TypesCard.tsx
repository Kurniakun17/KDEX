import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {upperCase,bgColor} from '../utils/index'

type TypesProps={
    types:{
        type:{
            name:string
        }
    }[]
}

export default function TypesCard({types}:TypesProps){
    
    return (
        <>
            {types.map((type, index) => {
                upperCase(type.type.name);
                return (<Box key={`${index}-${name}"`} borderRadius={"5px"} bgColor="white" color={`${bgColor[types[0].type.name as keyof typeof bgColor]}`}>
                    <Text p={"4px 7px"} fontSize="1rem" fontWeight={"sm"}>{upperCase(type.type.name)}</Text>
                </Box>);
            })}
        </>
    )
}
