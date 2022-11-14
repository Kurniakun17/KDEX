import { Box, Center } from '@chakra-ui/react'

type DataCardProps={
    name:string
}

export default function DataCard({name}:DataCardProps) {
    return (
            <Center m={"10px 0px"} shadow={"xl"} bgColor={"gray"} minH={"50px"} borderRadius="10px">
                <h1>{name}</h1>
            </Center>
    )
}
