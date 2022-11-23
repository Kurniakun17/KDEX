import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { BubblyLink } from 'react-bubbly-transitions'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box bg={"linear-gradient(90deg, rgba(70,115,143,1) 0%, rgba(112,128,169,1) 100%)"} color="white" mb={"2em"}>
        <Flex align={"center"} p="20px" justify={"space-between"}>
            <Link to="/home">
              <Heading>KDex</Heading>
            </Link>
            <BubblyLink to="/about" colorStart={"linear-gradient(90deg, rgba(70,115,143,1) 0%, rgba(112,128,169,1) 100%)"} colorEnd={"linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)"}>
              <Heading>
                About
              </Heading>
            </BubblyLink>
        </Flex>
    </Box>
  )
}
