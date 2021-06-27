import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BiLinkExternal } from 'react-icons/bi';

export default function Bulletins() {
    const notices = [
        {
            title: "Admission Notice",
            link: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/Admission_Notice-27-06-21.pdf"
        },
        {
            title: "Student Bio Data Form",
            link: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/Students-bio-data.pdf"
        },
        {
            title: "Student Admission Form",
            link: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/School-Admission-Form.pdf"
        },

        {
            title: "CBSE OASIS  2020-21",
            link: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/CBSE%20_OASIS-DATA-2020-21.pdf"
        }
    ];

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="teal.500" textAlign="center" textDecor="underline" fontFamily="heading">Bulletins</Heading>
                <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                    <Table variant="simple">
                        <Thead bgColor="teal.100">
                            <Tr>
                                <Th>Notice</Th>
                                <Th w={40}>Link</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                notices.map(({ title, link }, i) => (
                                    <Tr key={i}>
                                        <Td>{title}</Td>
                                        <Td>
                                            <Button
                                                colorScheme="teal"
                                                variant="solid"
                                                rightIcon={<BiLinkExternal />}
                                                size="sm"
                                                onClick={() => window.open(link, "__blank")}
                                            >
                                                View
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </Box>
                <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                    <Text p={2} fontSize="lg" fontWeight="semibold" bgColor="teal.200">
                        Notice
                    </Text>
                    {
                        notices.map(({ title, link }, i) => {
                            const isLast = (notices.length - 1) === i;
                            return (
                                <Text key={i} p={2} fontSize="md" borderBottomWidth={isLast ? 0 : 0.75} borderBottomColor="gray.200">
                                    <Link href={link} isExternal color="teal.400">
                                        {title} <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </Text>
                            )
                        })
                    }
                </Box>

            </Box>
        </Flex>
    )
}

