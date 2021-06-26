import {
    Box,
    VStack,
    Flex,
    Heading,
  
} from '@chakra-ui/react';

export default function Bulletins() {
    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="teal.500" textAlign="center" textDecor="underline" fontFamily="heading">Bulletins</Heading>
                <VStack spacing={4}></VStack>
            </Box>
        </Flex>
    )
}

