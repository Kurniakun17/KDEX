import React, { useEffect, useState } from "react";
import Axios from 'axios'
import {
    Tabs,
    TabPanels,
    TabPanel,
    Text,
    Flex,
    Box,
    Center,
    Heading,
    Grid,
} from "@chakra-ui/react";
import DetailedNavbar from "./DetailedNavbar";
import { Progress } from "@chakra-ui/react";
import {upperCase} from '../utils/index'
import DetailedEvo from "./DetailedEvo";

type DetailedTabsProps = {
    data: {
        stats: {
            base_stat: number;
        }[];
        abilities: {
            ability: {
                name: string;
            };
        }[];
        weight: number;
        types: {
            type: {
                name: string;
            };
        }[];
        height:number
    };
    speciesData:{
        habitat?: {
            name: string
        };
        color:{
            name:string
        }
        is_baby:boolean
        is_legendary:boolean
        is_mythical:boolean
        evolution_chain:{
            url:string
        }
    }
};

export default function DetailedTabs({ data, speciesData }: DetailedTabsProps) {

    let status = ""
    if(speciesData.is_baby){
        status="Baby Pokémon"
    }else if(speciesData.is_legendary){
        status="Legendary Pokémon"
    }else if(speciesData.is_mythical){
        status="Mythical Pokémon"
    }else{
        status="Regular Pokémon"
    }

    return (
        <>
            <Tabs>
                <DetailedNavbar></DetailedNavbar>
                <TabPanels>
                    <TabPanel textAlign={"left"}>
                        <Box>
                            <Grid
                                gridTemplateColumns={"minMax(0,1fr)"}
                                gap={"0.3rem"}
                            >
                                <Box>
                                    <Heading fontSize={"xl"}>PokéData</Heading>
                                </Box>
                                <Flex
                                    flexDir="row"
                                    justifyContent={"flex-start"}
                                    gap={"20%"}
                                    fontSize={"md"}
                                    fontWeight=""
                                >
                                    <Box>
                                        <Text>Color</Text>
                                        <Text>Height</Text>
                                        <Text>Weight </Text>
                                        <Text>Habitat</Text>
                                        <Text>Status</Text>
                                        <Text>Abilities </Text>
                                    </Box>
                                    <Box>
                                        <Text>
                                            {upperCase(speciesData.color.name)}
                                        </Text>
                                        <Text>{data.height/10} m</Text>
                                        <Text>{data.weight/10} kg</Text>
                                        <Text>{speciesData.habitat?.name?upperCase(speciesData.habitat.name):"None"}</Text>
                                        <Text>{status}</Text>
                                        <Flex flexDir={"column"}>
                                        {data.abilities.map((element, index) => (
                                                <span
                                                    key={`${index}-${element.ability.name}`}
                                                >
                                                    {upperCase(element.ability.name)}
                                                </span>
                                            ))}
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            gap={"1rem"}
                            justifyContent={"flex-start"}
                            flexDir={"column"}
                            textAlign={"left"}
                        >
                            <Box>
                                <Text>HP</Text>
                                <Progress
                                    value={data.stats[0].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                            <Box>
                                <Text>Attack</Text>
                                <Progress
                                    value={data.stats[1].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                            <Box>
                                <Text>Defense</Text>
                                <Progress
                                    value={data.stats[2].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                            <Box>
                                <Text>Special-Attack</Text>
                                <Progress
                                    value={data.stats[3].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                            <Box>
                                <Text>Special-Defense</Text>
                                <Progress
                                    value={data.stats[4].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                            <Box>
                                <Text>Speed</Text>
                                <Progress
                                    value={data.stats[5].base_stat}
                                    borderRadius={"10px"}
                                    max={255}
                                ></Progress>
                            </Box>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
