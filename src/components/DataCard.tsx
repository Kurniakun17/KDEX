import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BubblyLink} from 'react-bubbly-transitions'
import { bgColor, bgImg, upperCase } from '../utils/index'

type DataCardProps = {
    name: string
    number: number
    sprite: string
    types: {
        type: {
            name: string
        }
    }[]
}

export default function DataCard({ name, number, sprite, types }: DataCardProps) {
    return (
        <BubblyLink to={`/detailed/${name}`} colorStart={`${bgColor[types[0].type.name as keyof typeof bgColor]}`} colorEnd="#linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)">
            <Box m={"10px 0px"} shadow={"xl"} bgColor={`${bgColor[types[0].type.name as keyof typeof bgColor]}`} minH={"50px"} borderRadius="10px" color={"#fff"} p="10px">
                <Text fontWeight={"medium"}>#{number < 10 ? "00" : "0"}{number}</Text>
                <Center>
                    <Flex flexDir={"column"}  bgImg={bgImg.bug} bgPos="1000px 30px" bgRepeat={"no-repeat"}>
                        <Center>
                            <Image src={sprite} alt="pokemon-image" w={"100px"} h="100px" />
                        </Center>
                        <Heading fontSize={"1.5rem"} textAlign="center" fontWeight={"medium"}>{upperCase(name)}</Heading>
                        <Center>
                            <Flex justifyContent={"space-between"} m="0.2rem" gap="0.4rem">
                                {types.map((type, index) => {
                                    upperCase(type.type.name);
                                    return (<Box key={`${index}-${name}"`} borderRadius={"5px"} bgColor="white" color={`${bgColor[types[0].type.name as keyof typeof bgColor]}`}>
                                        <Text p={"4px 7px"} fontSize="0.8rem" fontWeight={"sm"}>{upperCase(type.type.name)}</Text>
                                    </Box>);
                                })}
                            </Flex>
                        </Center>
                    </Flex>
                </Center>
            </Box>
        </BubblyLink>
    )
}
