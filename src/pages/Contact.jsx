import {
    Box,
    Center,
    Text,
    HStack,
    Image,
    Flex,
    Heading,
    Icon,
    SimpleGrid
} from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const PrincipalImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/principal.png";

const PrincipalCard = () => (
    <Center my={4}>
        <Box borderRadius="md" shadow="md" overflow="hidden" p={4} px={8}>
            <Center>
                <Image boxSize="200px" name="Shri Nyamar Nyodu" src={PrincipalImg} />
            </Center>
            <Text mt={2} textAlign="center" color="teal.600" fontWeight="bold" textDecoration="underline">Shri Nyamar Nyodu</Text>
            <Text textAlign="center" color="teal.600" fontWeight="bold">Principal</Text>
            <Text textAlign="center" mt={2} fontWeight="semibold" color="gray.600">Contact</Text>
            <HStack spacing={2}>
                <Icon
                    as={FaPhoneAlt}
                    color="teal.400"
                />
                <Text>9402787232/8258980268</Text>
            </HStack>
            <HStack spacing={2}>
                <Icon
                    as={GrMail}
                    color="teal.400"
                />
                <Text>nyamarnyodu1965@gmail.com</Text>
            </HStack>
        </Box>
    </Center>
)

const TeacherCard = ({ name, position, inchargeOf, phone, email, img }) => (
    <Box borderRadius="md" shadow="md" overflow="hidden" p={4}>
        <Center>
            <Image boxSize="150px" name="Shri Nyamar Nyodu" src={img} />
        </Center>
        <Text mt={2} textAlign="center" color="teal.600" fontWeight="bold" textDecoration="underline">{name}</Text>
        <Text textAlign="center" color="teal.600" fontWeight="bold">{position}</Text>
        <Text textAlign="center" mt={2} fontWeight="semibold" color="gray.600">Govt.Store Cells</Text>
        <Text textAlign="center">
            {inchargeOf}
        </Text>
        <Text textAlign="center" mt={2} fontWeight="semibold" color="gray.600">Contact</Text>
        <Center>
            <Box>
                <HStack spacing={2} justifyContent="center">
                    <Icon
                        as={FaPhoneAlt}
                        color="teal.400"
                    />
                    <Text>{phone}</Text>
                </HStack>
                <HStack spacing={2} justifyContent="center">
                    <Icon
                        as={GrMail}
                        color="teal.400"
                    />
                    <Text>{email}</Text>
                </HStack>
            </Box>
        </Center>
    </Box>
)


export default function Contact() {

    const teachers = [
        {
            name: "Miss Domlu Manju",
            position: "TGT(ENGLISH)",
            inchargeOf: "Girls Hostel Superintendent",
            phone: "9436882487",
            email: "jinx19412@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/DOMLU-MANJU.png"
        },
        {
            name: "Shri Sony Pul",
            position: "TGT(S/S)",
            inchargeOf: "Boys Hostel Superintendent",
            phone: "9402929446",
            email: "sonypul@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/SONY-PUL.png"
        },
        {
            name: "Shri L.C Singh",
            position: "TGT(MATHS)",
            inchargeOf: "CBSE Exam Cell",
            phone: "9402071016",
            email: "chandrakumar0876@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/L-SINGH.png"
        },
        {
            name: "Shri Jenson Pangging",
            position: "TGT(GEO)",
            inchargeOf: "Home Exam Cell",
            phone: "9436085685",
            email: "jensonpangging@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/JENSON.png"
        },
        {
            name: "Shri Maklek Libang",
            position: "Prog. officer PGT(Chemistry)",
            inchargeOf: "NSS(National Service Scheme)",
            phone: "9615616418",
            email: "libangmaklek@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/MAKLEK.png"
        },
        {
            name: "Shri Pesamso Yun",
            position: "RT(IT), Caretaker Officer",
            inchargeOf: "NCC, Scouts & Guides, Games & Sports",
            phone: "9436223279",
            email: "peshamsoyun96@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/PESAMSO.png"
        },
        {
            name: "Shri Ajit Kr.Singha",
            position: "TGT(Chemistry)",
            inchargeOf: "Textbooks and Library",
            phone: "6033857862",
            email: "singhaajitlis@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/AJIT.png"
        },
        {
            name: "Shri Ayeaso Yun",
            position: "RT(IT)",
            inchargeOf: "Mid-Day Meal(MDM)",
            phone: "9436242821",
            email: "ayeasoyun2015@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/AYEASO.png"
        },
        {
            name: "Shri Tanom Mibang",
            position: "TGT(History)",
            inchargeOf: "Social Service",
            phone: "6033848734",
            email: "tnommbng@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/TANOM.png"
        },
        {
            name: "Binemsai Tayang Pul",
            position: "TGT(Hindi)",
            inchargeOf: "Staff Room",
            phone: "9383328547",
            email: "binemsai@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/BINEMSAI.png"
        },
        {
            name: "Shri Annaiso Bellai",
            position: "UDC",
            inchargeOf: "Office Furniture Accounts",
            phone: "9402939462",
            email: "langsianais@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/ANNAISO.png"
        },
        {
            name: "Miss Kenam Tayang",
            position: "WET",
            inchargeOf: "Crafts",
            phone: "9436439380",
            email: "kenamtayang31@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/KENAM.png"
        },
        {
            name: "Miss Kamhun Aran",
            position: "PGT(BIO)",
            inchargeOf: "Cultural",
            phone: "6033829653",
            email: "kamhun1988@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/KAMHUN.png"
        },
        {
            name: "Miss Manju Riba",
            position: "TGT",
            inchargeOf: "Swaachata-Cum-Cleanliness Abhiyaan",
            phone: "9402748145",
            email: "mnjuriba11@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/MANJU.png"
        },
        {
            name: "Miss Jayanty Langkam",
            position: "PRT",
            inchargeOf: "Spokesperson",
            phone: "9402734005",
            email: "jntlangkam2016@gmail.com",
            img: "https://ghss-hawai.s3.ap-south-1.amazonaws.com/JAYANTY.png"
        }
    ]

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="teal.500" textAlign="center" textDecor="underline" fontFamily="heading">CONTACTS</Heading>
                <PrincipalCard />



                <Center>
                    <SimpleGrid columns={[1, 2]} spacing={4}>
                        {
                            teachers.map((teacher, i) => (<TeacherCard key={i} {...teacher} />))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
        </Flex>
    );
}

// import { Box } from '@chakra-ui/react';
// import { PDFReader } from 'reactjs-pdf-reader';

// import Contacts from '../assets/documents/contacts.pdf';


// export default function About() {
//     return (
//         <Box p={4}>
//             <Box overflowX={["scroll", "hidden"]}>
//                 <PDFReader url={Contacts} showAllPage />
//             </Box>
//         </Box>
//     )
// }