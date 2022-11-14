import { Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type DataCardProps={
    name:string
}

export default function DataCard({name}:DataCardProps) {
    return (
            <Center m={"10px 0px"} shadow={"xl"} bgColor={"gray"} minH={"50px"} borderRadius="10px">
                <Link to={`/detailed/${name}`}><h1>{name}</h1></Link>
            </Center>
    )
}
