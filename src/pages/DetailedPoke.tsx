import { Box, Heading, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import DetailedCard from "../components/DetailedCard";
import pokeballImage from "../assets/pokeball.png";
import { bgColor, upperCase } from "../utils/index";

type DataProps = {
    name: string;
    abilities: {
        ability: {
            name: string;
        };
    }[];
    sprites: {
        other: {
            home: {
                front_default: string;
            };
        };
    };
    types: {
        type: {
            name: string;
        };
    }[];
    weight: number;
    height: number;
    stats: {
        base_stat: number;
    }[];
    species: {
        url: string;
    };
    habitat: {
        name: string;
    };
    id: number;
};

export default function DetailedPoke() {
    const [data, setData] = useState<DataProps>({} as DataProps);
    const [isLoading, setIsLoading] = useState(true);

    let { name } = useParams();
    let colour = "";

    const fetchData = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                console.log(res);
                colour =
                    bgColor[res.types[0].type.name as keyof typeof bgColor];
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Box>
                <Center>
                    <Heading>Loading . . .</Heading>
                </Center>
            </Box>
        );
    }

    let id;
    if (data.id < 10) {
        id = `00${data.id}`;
    } else if (data.id < 100) {
        id = `0${data.id}`;
    } else {
        id = `${data.id}`;
    }

    return (
        <Center color={"white"}>
            <Box
                className="detailedPokeContainer"
                bg={bgColor[data.types[0].type.name as keyof typeof bgColor]}
                minW={"50%"}
                p={"1em"}
                color={bgColor[data.types[0].type.name as keyof typeof bgColor]}
                borderRadius="30px"
                bgImage={pokeballImage}
                bgPos="top left -20%"
                bgSize={"500px"}
                bgRepeat={"no-repeat"}
                mb="2em"
            >
                <Flex m="10px 0" justify={"space-between"} overflow="hidden">
                    <BubblyLink
                        to="/"
                        colorStart={
                            bgColor[
                                data.types[0].type.name as keyof typeof bgColor
                            ]
                        }
                        colorEnd="linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)"
                    >
                        <Box
                            bgColor={"#FFF"}
                            p="1rem 2rem"
                            borderRadius={"6px"}
                            shadow="2xl"
                            textAlign={"center"}
                        >
                            <Heading fontSize={"lg"} fontWeight="semibold">
                                Back
                            </Heading>
                        </Box>
                    </BubblyLink>
                    <Flex gap={"5px"} flexDir="column">
                        <Box
                            bgColor={"#FFF"}
                            p="0.2rem 0.6rem"
                            borderRadius={"6px"}
                            shadow="2xl"
                            textAlign={"center"}
                        >
                            <Heading fontSize={"lg"} fontWeight="semibold">
                                #{id}
                            </Heading>
                        </Box>
                        <Flex gap={"5px"}>
                            {data.types.map((i, index) => {
                                return (
                                    <Box
                                        key={index}
                                        bgColor={"#fff"}
                                        color={`${
                                            bgColor[
                                                i.type
                                                    .name as keyof typeof bgColor
                                            ]
                                        }`}
                                        p="0.2rem 0.6rem"
                                        borderRadius={"5px"}
                                    >
                                        <Heading fontSize={"lg"}>
                                            {upperCase(i.type.name)}
                                        </Heading>
                                    </Box>
                                );
                            })}
                        </Flex>
                    </Flex>
                </Flex>
                <Center>
                    <DetailedCard data={data}></DetailedCard>
                </Center>
            </Box>
        </Center>
    );
}
