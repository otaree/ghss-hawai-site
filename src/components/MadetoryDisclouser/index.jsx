import {
    Box,
    HStack,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Text,
    Link,
    Icon
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaStarOfLife } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const CBSEUpgradationDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/CBSE-UPGRDATION.pdf"
const HealthSanitationDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/HEALTH-SANITATION.pdf";
const FireSafetyDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/FIRESAFETY.pdf";
const BuildingSafetyDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/BUILDING-SAFETY.pdf";
const DSEDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/DDSE-DSE-APPROVALS.pdf";
const TrustsDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/TRUST-SOCIETIES.pdf";
const FeeStructureDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/FEE-STRUCTURE.pdf";
const AcademicCalendarDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/Calendar-new.pdf";
const SMCDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/SMC.pdf";
const PTADoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/PTA.pdf";
const RESULTS = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/RESULTS.pdf";
const SchoolInfrastructure = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/school-infrastructure.pdf";
const NSS = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/NSS.pdf";
const SexualHarassmentCommitteeDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/sexual-harassment-committe.pdf";
const TeachersBioDataDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/teachers-biodata.pdf";
const TransferCertificateDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/TRANSFER-CERTIFICATE+-SAMPLE.pdf";
const LandCertificateDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/land-certificates.pdf";
const NCCDoc = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/NCC.pdf";

export default function MandatoryPublicDisclosure() {
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
                    <Thead bgColor="teal.200" h="40px">
                        <Tr >
                            <Th color="gray.800">Documents</Th>
                            <Th color="gray.800">Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>2220120</Td>
                        </Tr>
                        <Tr>
                            <Td>School code</Td>
                            <Td>37117</Td>
                        </Tr>
                        <Tr>
                            <Td>U-dise Code No.</Td>
                            <Td>12160309001</Td>
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
                            <Td>9402787232/8258980268</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="simple" display={["none", "table"]} size="md">
                    <Thead bgColor="teal.100">
                        <Tr>
                            <Th>Documents</Th>
                            <Th>Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Higher Secondary School, Hawai</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>2220120</Td>
                        </Tr>
                        <Tr>
                            <Td>School code</Td>
                            <Td>37117</Td>
                        </Tr>
                        <Tr>
                            <Td>U-dise Code No.</Td>
                            <Td>12160309001</Td>
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
                            <Td>9402787232/8258980268</Td>
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
                        <Tr>
                            <Td>Copies of valid Land certificates</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(LandCertificateDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Details of School Infrastructure</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(SchoolInfrastructure, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Nation Service Scheme(NSS)</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(NSS, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>National Cadet Corps(NCC)</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(NCCDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Sexual Harassment Committee</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(SexualHarassmentCommitteeDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Teachers Details</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(TeachersBioDataDoc, "__blank")}
                                >
                                    View
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Sample of Transfer Certificate(TC)</Td>
                            <Td>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    rightIcon={<BiLinkExternal />}
                                    size="sm"
                                    onClick={() => window.open(TransferCertificateDoc, "__blank")}
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
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={HealthSanitationDoc} isExternal color="teal.400">
                        Copies of valid water, health and sanitation certificates <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={LandCertificateDoc} isExternal color="teal.400">
                        Copies of valid Land certificates <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={SchoolInfrastructure} isExternal color="teal.400">
                        Details of School Infrastructure <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={NSS} isExternal color="teal.400">
                        Nation Service Scheme(NSS) <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={NCCDoc} isExternal color="teal.400">
                        National Cadet Corps(NCC) <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={SexualHarassmentCommitteeDoc} isExternal color="teal.400">
                        Sexual Harassment Committee <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" borderBottomWidth={0.75} borderBottomColor="gray.200">
                    <Link href={TeachersBioDataDoc} isExternal color="teal.400">
                        Teachers Details <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text p={2} fontSize="md" >
                    <Link href={TransferCertificateDoc} isExternal color="teal.400">
                        Sample of Transfer Certificate(TC) <ExternalLinkIcon mx="2px" />
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
        </Box>
    )
}
