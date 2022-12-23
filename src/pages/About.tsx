import { Box, Heading, Flex, Img, Center } from "@chakra-ui/react";
import react from '../assets/react.png'
import typescript from '../assets/typescript.png'
import chakra from '../assets/chakra.png'

export default function About() {
    return (
        <Box>
            <Center>
                <Heading>This Webapp created using</Heading>
            </Center>
            <Center>
                <Flex gap={"50px"} mt="20px">
                    <Img src={react} w="110px" h="100px"></Img>
                    <Img src={typescript} w="100px" h="100px"></Img>
                    <Img src={chakra} w="100px" h="100px" borderRadius={"10px"}></Img>
                </Flex>
            </Center>
        </Box>
    );
}
