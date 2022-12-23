import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import { bgColor, bgImg, upperCase } from "../utils/index";
import TypesCard from "./TypesCard";
import pokeball from "../assets/pokeball.png"
import unknownpokeball from "../assets/unknownpokeball.png";

type DataCardProps = {
    name: string;
    number: number;
    sprite: string;
    types: {
        type: {
            name: string;
        };
    }[];
};

export default function DataCard({
    name,
    number,
    sprite,
    types,
}: DataCardProps) {
    let id;
    if (number < 10) {
        id = `00${number}`;
    } else if (number < 100) {
        id = `0${number}`;
    } else {
        id = `${number}`;
    }

    return (
        <BubblyLink
            to={`/detailed/${name}`}
            colorStart={`${
                bgColor[types[0].type.name as keyof typeof bgColor]
            }`}
            colorEnd="#linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)"
        >
                <Box
                    m={"10px 0px"}
                    shadow={"xl"}
                    bgColor={`${
                        bgColor[types[0].type.name as keyof typeof bgColor]
                    }`}
                    minH={"50px"}
                    borderRadius="10px"
                    color={"#fff"}
                    p="10px"
                    bgImg={bgImg[types[0].type.name as keyof typeof bgImg]} bgRepeat={"no-repeat"} bgPos={"top left -10px"} 
                >
                    <Text fontWeight={"medium"}>#{id}</Text>
                    <Center>
                        <Flex flexDir={"column"} bgRepeat={"no-repeat"}>
                            <Center>
                                <Image
                                    src={sprite ? sprite : unknownpokeball}
                                    alt="pokemon-image"
                                    w={"100px"}
                                    h="100px"
                                />
                            </Center>
                            <Heading
                                fontSize={"1.5rem"}
                                textAlign="center"
                                fontWeight={"medium"}
                            >
                                {upperCase(name)}
                            </Heading>
                            <Center>
                                <Flex
                                    justifyContent={"space-between"}
                                    m="0.2rem"
                                    gap="0.4rem"
                                    fontSize={`"md"`}
                                >
                                    <TypesCard types={types}></TypesCard>
                                </Flex>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
        </BubblyLink>
    );
}
