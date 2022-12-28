import { Box, Heading, Flex, Img, Center } from "@chakra-ui/react";

export default function About() {
    return (
        <Box>
            <Center>
                <Heading>This Webapp created using</Heading>
            </Center>
            <Center>
                <Flex gap={"50px"} mt="20px">
                    <Img src={'/assets/react.png'} w="110px" h="100px"></Img>
                    <Img src={'/assets/typescript.png'} w="100px" h="100px"></Img>
                    <Img src={'/assets/chakra.png'} w="100px" h="100px" borderRadius={"10px"}></Img>
                </Flex>
            </Center>
        </Box>
    );
}
