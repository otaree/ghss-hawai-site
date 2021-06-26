import {
    ChakraProvider,
    Box,
    Image,
    Text,
    Heading,
    Center,
    Icon,
    HStack,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
    Button,
    Link,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Avatar,
    VStack,
    useDisclosure
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaStarOfLife, FaQuoteLeft } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

import Layout from './components/Layout'
import ClassFrontImg from './assets/images/school-front.jpg';
import FacultyMembersImg from './assets/images/faculty-members.jpg';
import InternalViewSchoolImg from './assets/images/internal-view-school.jpg';
import SideViewSchoolImg from './assets/images/side-view-school.jpg';
import TeachersResidentialImg from './assets/images/teachers-residential.jpg';
import ScoutsGuidesImg from './assets/images/scouts-guides.jpg';
import PrincipalImg from './assets/images/principal.png';
import CBSEUpgradationDoc from './assets/documents/CBSE-UPGRDATION.pdf';
import HealthSanitationDoc from './assets/documents/HEALTH-SANITATION.pdf';
import FireSafetyDoc from './assets/documents/FIRESAFETY.pdf';
import BuildingSafetyDoc from './assets/documents/BUILDING-SAFETY.pdf';
import DSEDoc from './assets/documents/DDSE-DSE-APPROVALS.pdf';
import TrustsDoc from './assets/documents/TRUST-SOCIETIES.pdf';
import FeeStructureDoc from './assets/documents/FEE-STRUCTURE.pdf';
import AcademicCalendarDoc from './assets/documents/ACADEMIC-CALENDER.pdf';
import SMCDoc from './assets/documents/SMC.pdf';
import PTADoc from './assets/documents/PTA.pdf';
import RESULTS from './assets/documents/RESULTS.pdf';

function Cover() {
    return (
        <Box pos="relative" overflow="hidden">
            <Image
                src={ClassFrontImg}
                height="90vh"
                width="100%"
                objectFit="cover"
                filter="blur(1.5px)"
            />

            <Box
                pos="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
            >
                <Center height="100%">
                    <Box
                        bgColor="blackAlpha.400"
                        p={[4, 8]}
                        borderRadius="md"
                        shadow="md"
                        overflow="hidden"
                    >
                        <Heading fontSize={["3xl", "5xl"]} color="white" textAlign="center">
                            Welcome to<br />
                            <Text as="span" textTransform="capitalize">Govt. Higher Secondary School, Hawai</Text>
                        </Heading>
                    </Box>

                </Center>
            </Box>
        </Box>
    );
}

function MandatoryPublicDisclosure() {
    return (
        <Box py={[4, 8]} px={[4, 16]}>
            <HStack mb={4}>
                <Heading
                    fontSize={["xl", "3xl"]}
                >
                    Mandatory Public Disclosure
                </Heading>
                <Icon
                    as={FaStarOfLife}
                    w={4}
                    h={4}
                    color="teal.400"
                />
            </HStack>

            <Heading fontSize={["lg", "2xl"]}>
                A. General Information
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" mt={2} mb={4}>
                <Table variant="simple" display={["table", "none"]} size="sm">
                    <Thead bgColor="teal.100" h="40px">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>CBSE/Affl/2220120/2011/1451-54</Td>
                        </Tr>
                        <Tr>
                            <Td>Address</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>ghsshawai.anjaw@gmail.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile No.</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="simple" display={["none", "table"]} size="md">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>CBSE/Affl/2220120/2011/1451-54</Td>
                        </Tr>
                        <Tr>
                            <Td>Address</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>ghsshawai.anjaw@gmail.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile No.</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Heading fontSize={["lg", "2xl"]}>
                B. Documents And Information
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th >Information</Th>
                            <Th w={40}>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Copies of Affiliation/Upgradation Letter</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(CBSEUpgradationDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copies of Societies/Trust/Company Registration/Renewal Certificate</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(TrustsDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copies of No Objection Certificate(NOC) issued</Td>
                            <Td>
                                <Button colorScheme="teal" variant="solid" rightIcon={<BiLinkExternal />} size="sm">
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copies of recognition certificate under RTE Act, 2009, And it's renewal</Td>
                            <Td>
                                <Button colorScheme="teal" variant="solid" rightIcon={<BiLinkExternal />} size="sm">
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copy of Valid Building Safety Certificate as per the National Building Code</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(BuildingSafetyDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copy of Valid Fire safety certificate issued by the competent authority</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(FireSafetyDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copy of the DEO certificate submitted by the school for Affiliation/Upgradation/extension of the Affiliation or self certification by school</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />} size="sm"
                                    onClick={() => window.open(DSEDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Copies of valid water, health and sanitation certificates</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(HealthSanitationDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <Text p={2} fontSize="lg" fontWeight="semibold" bgColor="teal.200">
                    Information
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={CBSEUpgradationDoc} isExternal color="teal.400">
                        Copies of Affiliation/Upgradation Letter <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={TrustsDoc} isExternal color="teal.400">
                        Copies of Societies/Trust/Company Registration/Renewal Certificate <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href="#" isExternal color="teal.400">
                        Copies of No Objection Certificate(NOC) issued <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href="#" isExternal color="teal.400">
                        Copies of recognition certificate under RTE Act, 2009, And it's renewal <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={BuildingSafetyDoc} isExternal color="teal.400">
                        Copy of Valid Building Safety Certificate as per the National Building Code <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={FireSafetyDoc} isExternal color="teal.400">
                        Copy of Valid Fire safety certificate issued by the competent authority <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={DSEDoc} isExternal color="teal.400">
                        Copy of the DEO certificate submitted by the school for Affiliation/Upgradation/extension of the Affiliation or self certification by school <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md">
                    <Link href={HealthSanitationDoc} isExternal color="teal.400">
                        Copies of valid water, health and sanitation certificates <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
            </Box>

            <Heading fontSize={["lg", "2xl"]}>
                C. Result And Academics
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th >Information</Th>
                            <Th w={40}>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Fee Structure of the school</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(FeeStructureDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Annual Academic Calender</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(AcademicCalendarDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>List of School Management Committee(SMC)</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(SMCDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>List of Parents Teachers Association (PTA) Members</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(PTADoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Last Three-year result of the board Examination</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(RESULTS, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <Text p={2} fontSize="lg" fontWeight="semibold" bgColor="teal.200">
                    Information
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={FeeStructureDoc} isExternal color="teal.400">
                        Fee Structure of the school <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={AcademicCalendarDoc} isExternal color="teal.400">
                        Annual Academic Calender <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={SMCDoc} isExternal color="teal.400">
                        List of School Management Committee(SMC) <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={PTADoc} isExternal color="teal.400">
                        List of Parents Teachers Association (PTA) Members <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md">
                    <Link href={RESULTS} isExternal color="teal.400">
                        Last Three-year result of the board Examination <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
            </Box>

            <Heading fontSize={["md", "xl"]}>
                Result Class: X
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple" size="sm" >
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th w={40}>Year</Th>
                            <Th textAlign="center" >No. of Student registered</Th>
                            <Th textAlign="center" >No. of Student Passed</Th>
                            <Th textAlign="center" w={120} >Passed %</Th>
                            <Th textAlign="center" w={100}>Remarks</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2019</Td>
                            <Td textAlign="center">35</Td>
                            <Td textAlign="center">09</Td>
                            <Td textAlign="center">21.75</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                        <Tr>
                            <Td>2020</Td>
                            <Td textAlign="center">32</Td>
                            <Td textAlign="center">15</Td>
                            <Td textAlign="center">46.88</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Year
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">2019</Text>
                    <Text p={2} w="20vw" textAlign="center">2020</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        No. of Student registered
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">35</Text>
                    <Text p={2} w="20vw" textAlign="center">32</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        No. of Student Passed
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">09</Text>
                    <Text p={2} w="20vw" textAlign="center">15</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Passed %
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">21.75</Text>
                    <Text p={2} w="20vw" textAlign="center">46.88</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Remarks
                    </Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                </HStack>
            </Box>

            <Heading fontSize={["md", "xl"]}>
                Result Class: XII
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple" size="sm" >
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th w={40}>Year</Th>
                            <Th textAlign="center" >No. of Student registered</Th>
                            <Th textAlign="center" >No. of Student Passed</Th>
                            <Th textAlign="center" w={120}>Passed %</Th>
                            <Th textAlign="center" w={100}>Remarks</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2019</Td>
                            <Td textAlign="center">41</Td>
                            <Td textAlign="center">23</Td>
                            <Td textAlign="center">56.10</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                        <Tr>
                            <Td >2020</Td>
                            <Td textAlign="center">07</Td>
                            <Td textAlign="center">06</Td>
                            <Td textAlign="center">85.71</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Year
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">2019</Text>
                    <Text p={2} w="20vw" textAlign="center">2020</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        No. of Student registered
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">41</Text>
                    <Text p={2} w="20vw" textAlign="center">07</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        No. of Student Passed
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">23</Text>
                    <Text p={2} w="20vw" textAlign="center">06</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Passed %
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">56.10</Text>
                    <Text p={2} w="20vw" textAlign="center">85.71</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="teal.200">
                        Remarks
                    </Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                </HStack>
            </Box>


            <Heading fontSize={["lg", "2xl"]}>
                D. Staff(Teaching)
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" mt={2} mb={4}>
                <Table variant="simple" display={["none", "table"]} size="md">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Principle</Td>
                            <Td>Shri Nyamar Nyodu</Td>
                        </Tr>
                        <Tr>
                            <Td>Total No. of teachers</Td>
                            <Td>27</Td>
                        </Tr>
                        <Tr>
                            <Td>Teachers section ratio</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Details of special educator</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Details of counsellor and wellness teacher</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="simple" display={["table", "none"]} size="sm">
                    <Thead bgColor="teal.100" h="40px">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Principle</Td>
                            <Td>Shri Nyamar Nyodu</Td>
                        </Tr>
                        <Tr>
                            <Td>Total No. of teachers</Td>
                            <Td>27</Td>
                        </Tr>
                        <Tr>
                            <Td>Teachers section ratio</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Details of special educator</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Details of counsellor and wellness teacher</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Heading fontSize={["lg", "2xl"]}>
                E. School Infrastructure
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" mt={2}>
                <Table variant="simple" display={["none", "table"]} size="md">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Total campus area</Td>
                            <Td>21911.8 sq.mtrs</Td>
                        </Tr>
                        <Tr>
                            <Td>No. of class rooms</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of laboratories</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Internet facility</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of girls toilets</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of boys toilets</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="simple" display={["table", "none"]} size="sm">
                    <Thead bgColor="teal.100" h="40px">
                        <Tr>
                            <Th >Documents</Th>
                            <Th >Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Total campus area</Td>
                            <Td>21911.8 sq.mtrs</Td>
                        </Tr>
                        <Tr>
                            <Td>No. of class rooms</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of laboratories</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Internet facility</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of girls toilets</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>No. of boys toilets</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

        </Box>
    )
}

function GalleryImage({ image, title }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                p={2}
                bgColor="white"
                borderRadius="md"
                shadow="md"
                m={2}
                cursor="pointer"
                _hover={{
                    transform: "scale(1.025)"
                }}
                onClick={onOpen}
            >
                <Image
                    w={380}
                    h={240}
                    objectFit="cover"
                    src={image}
                />
                <Text fontSize="md" fontWeight="semibold" textAlign="center" my={1}>{title}</Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size={["4xl", "full"]}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            w={[380, "100%"]}
                            h={[240, "86vh"]}
                            objectFit="cover"
                            src={image}
                        />
                        <Text fontSize="md" fontWeight="semibold" textAlign="center" my={1}>{title}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

function PrincipleMessage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box p={[4, 8]} bgColor="teal.50">
                <Flex flexDirection={["column", "row"]} width="100%">
                    <Box>
                        <Box display={["block", "none"]}>
                            <Center>
                                <Avatar size="2xl" name="Shri Nyamar Nyodu" src={PrincipalImg} />
                            </Center>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Shri Nyamar Nyodu</Text>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Principal</Text>
                        </Box>
                        <Box display={["none", "block"]} width={180} >
                            <Center>
                                <Avatar size="2xl" name="Shri Nyamar Nyodu" src={PrincipalImg} />
                            </Center>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Shri Nyamar Nyodu</Text>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Principal</Text>
                        </Box>
                    </Box>
                    <Box p={2} ml={4}>
                        <Flex flexWrap="wrap" p={2}>
                            <Icon as={FaQuoteLeft} color="teal.500" w={6} h={6} />
                            <Heading fontSize={["lg", "2xl"]} color="teal.700">
                                Our mission is in developing well rounded individuals who demonstrate resilience,
                                determination and strength of character. We are determining to equip the students
                                with skills required to access all opportunities and accordingly enhancing their life
                                chances. We work hard for developing this institution an inspirational school and
                                aims to empowers students to exercise their talents responsibly by leading a
                                fulfilling life and making an active contributions towards social justice and the
                                common good. The school strives to provides the students with a stimulating and
                                safe environment in order for meaningful learning to take place.
                            </Heading >
                        </Flex>
                        <Center>
                            <Button
                                variant="outline"
                                colorScheme="teal"
                                mt={4}
                                fontWeight="bold"
                                onClick={onOpen}
                            >
                                Read More
                            </Button>
                        </Center>
                    </Box>
                </Flex>
            </Box>


            <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Principal Desk</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Center>
                                <Avatar size="2xl" name="Shri Nyamar Nyodu" src={PrincipalImg} />
                            </Center>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Shri Nyamar Nyodu</Text>
                            <Text textAlign="center" color="teal.600" fontWeight="bold">Principal</Text>
                        </Box>
                        <VStack spacing={2} p={4}>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                I am extremely delighted that our institution situated at
                                one of the remotest area of Anjaw District (A.P) bordering China is launching its own
                                school website to the World. With great pride, I am here to inaugurate the launching of our school website.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                With profound gratitude I thank you for visiting our school website. We are here to
                                serve and enrich the students.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                At the outset of launching our own new school website, I extend a very warm
                                welcome to one and all.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                “There is joy in work. There is no happiness except in the realization that we have
                                accomplished something.”
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Welcome to our brand new school website! It is with great pride and pleasure we
                                announce the launching of our new school website.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                guardians, we have designed this website to provide a comprehensive overview
                                aims and values, useful information, transparency and resources for pupils,
                                parents and patrons. With the way the new technology is always changing and
                                strengthening its offerings, we felt it was time to give our parents 8: students the
                                best possible. Our new school website is a huge step forward, streamlining the
                                way we convey information to parents and post the most current school schedule,
                                notices and immediate information’s.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Let us share what we love about our new website; while most visitors will be in
                                love with the new design and its look, the most impressive thing is additions to the
                                main navigation page include a various School Sections, student and Parents
                                corner and many others. The website features a navigation menu and updated
                                content so the required information can be sought in the blink of an eye.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Our school website can be viewed at your palms now, with a hot cup of tea and
                                snacks.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Our new website has been developed to showcase our strengths and reflect our
                                brand positioning. We know that making the website better than before is not
                                simply about giving it a new design, but understanding what you as the visitor
                                need. We did this by looking at what you said you expect from the website,
                                analyzing numerous analytics and carrying out focus groups. We produced our
                                first concepts and tested these with current and prospective students, refining
                                them along the way before launching our website.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                We are launching the website in static mode and so we could get your feedback
                                — visitors were prompted to take part in a survey when visiting the website. Your
                                feedback helped us to see how we‘ve done and where we could make more
                                improvements, before the new website went live.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Your feedbacks, suggestions and advises are always welcome for improvement
                                and standardisation of our school website.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                The website has been designed and built to showcase the school's fantastic
                                amenities, as well as the CBSE and govt. curriculum, day to day life and any
                                available extra-curricular activities and out of school care.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                The main purpose of the new website is to provide current and prospective parents
                                with all the information they might require.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                One aspect of the new website that we're particularly proud of is the stunning
                                photography that is featured throughout. The navigation has been structured to
                                ensure it is user friendly and meets appropriate guidelines. Overall, we think the
                                website successfully represents school values and will hopefully help us increase
                                brand awareness.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                As you pursue our website, you will find comprehensive overview of our school
                                programes and services. The dynamic changes in today's educational environment
                                demand persistent efforts from both the teachers and the students. The launching of
                                our school website is one step fonuard in this regard.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Govt. Hr. Sec. School, Hawai is a premier institute of the state and one lone higher
                                institute of learning situated at the district headquarter of Aniaw District. We have
                                highly competent experienced faculties and well disciplined students worthy to make
                                their mark in all spheres of life. I feel privilege to lead such a vibrant institution that
                                offers enormous opportunities to the students. We are proud of our inclusive ethos
                                where we set high standard and expectation from our students to achieve their very
                                best. From the moment a student enters our school, we want them to feel a sense of
                                happiness and belonging, as it is essential to their future success.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                The school is affiliated to CBSE Board and duly been recognized by the Govt. of
                                Arunachal Pradesh. All mandatory documents laid down by the CBSE and the govt.,
                                required for opening of a institute of learning is made available at the school website
                                "Home page" —under the link Icon -
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                The school has a sprawling campus and a spacious, newly school building
                                infrastructure, housing well ventilated and sound classrooms, science Laboratories,
                                computer-cum-smart classrooms and other gadgets to enhance the teaching
                                learning process, a library with books on various journals and subjects, Auditorium,
                                Play Ground, Computers, Audio-visual Equipments, sufficient Staff Quarters, Boys
                                and Girls Hostels, NCC, NSS, Scouts and Guides. The school has the 24 hours
                                electrical and water connections and sufficient no.of Toilets for Boys and Girls,
                                washrooms and urinals, surrounded by RCC pucca boundary walls with entrance
                                Gates.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Special Ramps has been incorporated in the school building campus, conducive and
                                congenial to the disabled students and parents.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                I warmly welcome you to visit our campus. I am sure that you will appreciate the
                                caring and dynamic culture that is so much a part of our state. Our school is
                                dedicated to nurture responsive and motivated students through a dynamic and
                                success oriented education program.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Our mission is in developing well rounded individuals who demonstrate resilience,
                                determination and strength of character. We are determining to equip the students
                                with skills required to access all opportunities and accordingly enhancing their life
                                chances. We work hard for developing this institution an inspirational school and
                                aims to empowers students to exercise their talents responsibly by leading a
                                fulfilling life and making an active contributions towards social justice and the
                                common good. The school strives to provides the students with a stimulating and
                                safe environment in order for meaningful learning to take place.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                Summing up, I wish to thank you for your invaluable contribution in nurturing young
                                minds and spreading the joy of learning. It is universally acknowledged that a
                                teacher plays a pivotal role in shaping the character and aspirations of a child. Our
                                ancient scriptures too remind us of the bonding and harmonious relationship
                                between Guru and Shishya, but this bonding brings with it the responsibility of
                                enabling the students to realise their full potential by inculcating in them the values
                                of integrity, hard-work and commitment. A teacher is not only a parent, friend,
                                philosopher and guide to his/ her students, but also a mentor who imbues in them
                                the sterling qualities of head and heart, thus moulding the future citizens of our great
                                nation. We all, in some way or the other, owe a lot to our teachers.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                On this occasion, I once again take this opportunity to recognise, with a deep sense
                                of appreciation, your dedication and readiness to learn and adapt to technology and
                                take teaching through digital modes during these trying times of COVID 19
                                pandemic. Moving away from the traditional methods of teaching must have been
                                challenging, but your dedication, improvisation, quick adaptability and your
                                relentless efforts have ensured the smooth and continuous transaction of academic
                                activities which is highly commendable.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                One aspect of the new website that we're particularly proud of is the stunning
                                photography that is featured throughout. The navigation has been restructured to
                                ensure it is user friendly and meets appropriate guidelines. Overall, we think the
                                website successfully represents school values and will hopefully help us increase
                                brand awareness.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                We hope you find it useful by viewing our school website. If you do happen to spot
                                any issues, we‘d appreciate the feedback, so don‘t hesitate to get in touch.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                We will keep on working and updating our school website upon your feedbacks and
                                suggestions.
                            </Text>
                            <Text fontFamily="body" w="100%" fontWeight="semibold" fontSize="lg" textAlign="justify">
                                The school family of GHSS Hawai once again acknowledges sincere thanks and
                                gratitude for viewing our school website.
                            </Text>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

function PictureGallery() {
    const pictures = [
        {
            img: FacultyMembersImg,
            title: "Faculty members"
        },
        {
            img: InternalViewSchoolImg,
            title: "Inside view of School"
        },
        {
            img: SideViewSchoolImg,
            title: "Side View of School"
        },
        {
            img: TeachersResidentialImg,
            title: "Faculty Residential"
        },
        {
            img: ScoutsGuidesImg,
            title: "Scout & Guides"
        }
    ]
    return (
        <>
            <Flex columns={[1, 3]} p={4} bgColor="teal.500" spacing={2} justifyContent="center" flexWrap="wrap">
                {
                    pictures.map((picture, i) => (
                        <GalleryImage key={i} image={picture.img} title={picture.title} />
                    ))
                }
            </Flex>
        </>
    );
}

export default function App() {
    return (
        <ChakraProvider>
            <Layout>
                <Cover />
                <MandatoryPublicDisclosure />
                <PrincipleMessage />
                <PictureGallery />
            </Layout>
        </ChakraProvider>
    );
}