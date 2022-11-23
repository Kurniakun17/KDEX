import { Box, Flex, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'

export default function DetailedNavbar() {
  return (
    <TabList fontWeight={"semibold"}>
        <Tab   fontWeight={"semibold"} fontSize={"xl"}>About</Tab>
        <Tab   fontWeight={"semibold"} fontSize={"xl"}>Base Stats</Tab>
        <Tab   fontWeight={"semibold"} fontSize={"xl"}>Moves</Tab>
    </TabList>
  )
}
