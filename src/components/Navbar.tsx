import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Box bg={"linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(121,121,237,1) 55%, rgba(18,158,186,1) 100%);"} color="white" mb={"2em"}>
        <Flex align={"center"} p="20px">
            <Heading>KDex</Heading>
        </Flex>
    </Box>
  )
}
