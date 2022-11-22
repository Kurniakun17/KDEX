import React from 'react'
import { Tabs, TabPanels, TabPanel, Text, Flex, Box } from '@chakra-ui/react'
import DetailedNavbar from './DetailedNavbar'
import { Progress } from '@chakra-ui/react'

type DetailedTabsProps={
    stats:{
        base_stat:number
    }[]
}

export default function DetailedTabs({stats}:DetailedTabsProps) {
    return (
        <>
            <Tabs>
                <DetailedNavbar></DetailedNavbar>
                <TabPanels>
                    <TabPanel textAlign={"left"}>
                        <Flex flexDir="column" justifyContent={"flex-start"} fontWeight="semibold" gap={"10px"}>
                            <Box>
                                <Text>HP</Text>
                                <Progress value={stats[0].base_stat} borderRadius={"10px"} max={255}></Progress>
                            </Box>
                            <Box>
                                <Text>Attack</Text>
                                <Progress value={stats[1].base_stat}  borderRadius={"10px"} max={255}></Progress>
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
                        <Text>Halo</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
