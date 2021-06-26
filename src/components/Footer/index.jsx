import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box py={2}>
            <Text fontFamily="body" textAlign="center" fontSize={["md", "lg"]} fontWeight="semibold" color="gray.500">
                Copyright &#169; Govt. Higher Secondary School, Hawai. All rights reserved.
            </Text>
        </Box>
    )
}