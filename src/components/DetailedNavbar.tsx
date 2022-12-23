import {Tab, TabList} from '@chakra-ui/react'

export default function DetailedNavbar() {
  return (
    <TabList fontWeight={"semibold"}>
        <Tab   fontWeight={"semibold"} fontSize={"xl"}>About</Tab>
        <Tab   fontWeight={"semibold"} fontSize={"xl"}>Base Stats</Tab>
    </TabList>
  )
}
