import { Box, Text } from '@chakra-ui/react'
import { upperCase, bgColor } from '../utils/index'

type TypesProps = {
    types: {
        type: {
            name: string
        }
    }[]
}

export default function TypesCard({ types }: TypesProps) {
    return (
        <>
            {types.map((type, index) => {
                upperCase(type.type.name);
                return (<Box key={`${index}"`} borderRadius={"5px"} bgColor="white" color={`${bgColor[type.type.name as keyof typeof bgColor]}`} fontWeight="semibold">
                    <Text p={"0 7px"} fontWeight={"sm"}>{upperCase(type.type.name)}</Text>
                </Box>);
            })}
        </>
    )
}
