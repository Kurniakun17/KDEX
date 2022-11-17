import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type DataCardProps={
    name:string
    number: number
    sprite:string
}

export default function DataCard({name, number, sprite}:DataCardProps) {
    return (
        <Link to={`/detailed/${name}`}>
            <Center m={"10px 0px"} shadow={"xl"} bgColor={"#fff"} minH={"50px"} borderRadius="10px" color={"#000"} p="10px">
                <Flex flexDir={"column"}>
                    <Image src={sprite} alt="pokemon-image" w={"100px"} h={"100px"}/>
                    <Heading size={"sm"}>#{number<10?"00":"0"}{number+1} {name}</Heading>
                </Flex>
            </Center>
        </Link>
    )
}
