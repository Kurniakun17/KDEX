import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Error404NotFound() {
  return (
    <Center>
      <Box>
        <Heading>{`Error 404 Not Found :(`}</Heading>
      </Box>
    </Center>
  )
}
