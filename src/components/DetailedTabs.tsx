import React from 'react'
import { Tabs, TabPanels, TabPanel, Text, Flex, Box, Center, Heading } from '@chakra-ui/react'
import DetailedNavbar from './DetailedNavbar'
import { Progress } from '@chakra-ui/react'
import TypesCard from './TypesCard'

type DetailedTabsProps = {
    stats: {
        base_stat: number
    }[]
    abilities: {
        ability: {
            name: string
        }
    }[]
    weight: number
    types: {
        type: {
            name: string
        }
    }[]
}

export default function DetailedTabs({ stats, abilities, weight, types }: DetailedTabsProps) {
    return (
        <>
            <Tabs>
                <DetailedNavbar></DetailedNavbar>
                <TabPanels>
                    <TabPanel textAlign={"left"}>
                        <Flex flexDir="column" justifyContent={"flex-start"} gap={"10px"} fontSize={"lg"}>
                            <Box>
                                <Text size={"md"} >Abilities : {abilities.map((element) => <span key={`${name}-${element.ability.name}`}>{element.ability.name}, </span>)}</Text>
                                <Text>Weight : {weight} kg</Text>
                                <Flex alignItems={"center"}>
                                    <Text >Types :</Text>
                                    <TypesCard types={types}></TypesCard>
                                </Flex>
                            </Box>
                            <Center>
                                <Heading size={"lg"}>Stats</Heading>
                            </Center>
                            <Box>
                                <Text>HP</Text>
                                <Progress value={stats[0].base_stat} borderRadius={"10px"} max={255} ></Progress>
                            </Box>
                            <Box>
                                <Text>Attack</Text>
                                <Progress value={stats[1].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                            <Box>
                                <Text>Defense</Text>
                                <Progress value={stats[2].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                            <Box>
                                <Text>Special-Attack</Text>
                                <Progress value={stats[3].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                            <Box>
                                <Text>Special-Defense</Text>
                                <Progress value={stats[4].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                            <Box>
                                <Text>Speed</Text>
                                <Progress value={stats[5].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
