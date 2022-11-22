import { Box, Flex, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'

export default function DetailedNavbar() {
  return (
    <TabList>
        <Tab>About</Tab>
        <Tab>Level</Tab>
    </TabList>
  )
}
