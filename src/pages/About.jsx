import {
    Box,
    Center,
    Text,
    VStack,
    Image,
    Flex,
    Heading,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react';
import { AiOutlineStar } from 'react-icons/ai';

const SchoolFrontImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/school-front.jpg";
const ArialViewImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/aerial-view-school.jpg";
const HawaiUrbanImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/hawai-urban-view.jpg";
const SideViewSchoolImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/side-view-school.jpg";
const GrilsDormitory = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/grils-dormitory.png";
const BoysDormitory = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/boys-dormitory.png";
const TeachersResidentialImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/teachers-residential.jpg";

export default function About() {
    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="teal.500" textAlign="center" textDecor="underline" fontFamily="heading">HISTORY AND ABOUT</Heading>
                <VStack spacing={4}>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The history of educational development of Anjaw,the 16th and the
                        easternmost district of Arunachal Pradesh lies in the history of Lohit district. In 1919,
                        under the British Administration, the <Text as="i" color="green.400">Sadiya Frontier Tract</Text> was formed. After India’s
                        Independence, the Sadiya Frontier Tract was divided into two districts namely ABHOR
                        HILLS district and <Text as="i" color="green.400">MISHMI HILLS</Text> district. On <Text as="em" color="teal.500">13th August 1952,TEZU</Text> became the
                        Headquarter of Mishmi Hills district. In 1954,Mishmi Hills District was renamed as LOHIT
                        FRONTIER DIVISION and in 1965 it again was renamed as <Text as="em" color="teal.500">LOHIT DISTRICT</Text>.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={SchoolFrontImg}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">Front View of School</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        <Text as="em" color="teal.500">ANJAW DISTRICT</Text> was carved out of LOHIT with the Gazette
                        notification of Govt.of Arunachal Pradesh on <Text as="em" color="teal.500">19th March’2004</Text>,although the Arunachal
                        (Re-organisation of Districts)Act,1980 to this effect had deemed to have come into
                        force with effect from 04th December’2003
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The history of educational development of Anjaw,the 16th and the
                        easternmost district of Arunachal Pradesh lies in the history of Lohit district. In 1919,
                        under the British Administration, the Sadiya Frontier Tract was formed. After India’s
                        Independence, the Sadiya Frontier Tract was divided into two districts namely ABHOR
                        HILLS district and MISHMI HILLS district. On 13th August 1952,TEZU became the
                        Headquarter of Mishmi Hills district. In 1954,Mishmi Hills District was renamed as LOHIT
                        <Text as="i" color="green.400">FRONTIER DIVISION</Text> and in 1965 it again was renamed as <Text as="i" color="green.400">LOHIT DISTRICT</Text>.
                    </Text>


                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={ArialViewImg}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">Top View of GHSS Hawai and hawai township</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        <Text as="em" color="teal.500">ANJAW DISTRICT</Text> was carved out of LOHIT with the Gazette
                        notification of Govt.of Arunachal Pradesh on 19th March’2004,although the Arunachal
                        (Re-organisation of Districts)Act,1980 to this effect had deemed to have come into
                        force with effect from 04th December’2003.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={HawaiUrbanImg}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">View of Hawai District Headquarters</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The educational development took place simultaneously with the political and the administrative developments in
                        this areas. The Department of Education was established in 1947 to cater the needs of education of the people.The Office of the education Officer then was at Sadiya.In 1952,the Office of the Education Officer was shifted to Margherita in Assam,as 4 Sadiya town was washed out due to flood.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={SideViewSchoolImg}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">Side View of GHSS Hawai </Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        As the state of Arunachal Pradesh did not inherit any system of its own
                        educational development, so is Anjaw District. Anjaw, meaning “Hill” or “Mountain”
                        in Mishmi (Kamaan) dialect was a land hidden which neither the ancient nor the
                        medieval education had any sign of influence until 1947 when the Department of
                        Education,
                        the present day formal system of education in the district is seen. Now, the educational
                        development is gaining momentum at a very large scale and at a very fast rate in the
                        district.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={GrilsDormitory}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">View of Girls Dormitory</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Govt. Higher Secondary School Hawai is located at Old Hawai
                        town locally and lovingly called as “Phohloh“ the administrative headquarter situated
                        on the left banks of the Mighty Lohit River, a tributary of Brahmaputra River, at an
                        altitude of 1296 meters above sea-level. Topography of the school and Hawai is-
                        Latitude- 27.88863 Longitude – 96.798927 Elevation - 1339.28m
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={BoysDormitory}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">view of Boys Dormitory</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Hawai actually means “stagnant Water, Pond or Lake” in Kaman (Mishmi)
                        dialect. There are two ponds or lakes at Hawai. First is called ”PHOHLOH” JHOW or
                        PHOHLOH HAWAI” ie. A lake near Girls Hostel of this school. The second Hawai JHOW
                        or lake is at then Ration Dropping ground where the site for Tamladu Ground of
                        Hawai is established at present. But it seems that now a days this JHOW(lake/Pond)
                        water volume has reduced may be due to Urbanization. The legend of this two lakes at
                        Hawai came into being by the <Text as="em" color="teal.500" fontWeight="semibold">MATAI (Almighty God)</Text> gift after dropping two little
                        drops of water on the demand of inhabitants while MATAI was carrying water to form
                        an Ocean of this Earth.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school in its initial stage was a Govt. Inter-Village(I.V) School and was
                        established in the year 1964. And was located in the present Helipad ground,Hawai.
                        And it continued for many years.Viewing the availability of space and future scope of
                        expansion of the school,it was shifted to the present site.It was here that it came to be
                        known as Govt.Primary School, Hawai
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school had a very humble beginning. The building materials used were
                        the local available woods and bamboos like a small thatched hut” It could only
                        accommodate the students and teachers sat on the mud/ground floor with thatch
                        over head as a roof. There were no cemented floors nor tin roofs. There was no proper road connectivity and the students and teachers walked on foot covering miles to collect their rations. There was no electrification and thus no light. The students and teachers used kerosene lamps or have to to wait for the day break to study. Despite all the odds, the school was upgraded to Middle sections in the Year 1970.The total enrolment of students just before up gradation in the very same year 1970 was 26(twenty six)Conversion to Middle school let to the increase of students enrolment rapidly. With public awareness and consciousness of the importance of education, there was demand for good infrastructure of the school. Administrative blocks and more class rooms were constructed.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        In 1975-76 Night School at Changung Village created a record in the state by
                        producing a youth like  <Text as="em" color="teal.500" fontWeight="semibold">Mr.Kalikho Pul</Text>. The Hawai school till 1973 was under Assamese
                        medium,but later turn into English medium.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={TeachersResidentialImg}
                            />
                            <Text textAlign="center" color="teal.400" mt={2} fontWeight="semibold">View of Teachers Residential Quarters</Text>
                        </Box>
                    </Center>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        With the increasing in strength of students and public demand, The school
                        was upgraded to Secondary section up to class x in the year 1993.The school had the
                        facility of Hostel for both boys & girls. The hostel boarders had to fetch ration
                        commodities from so called ”Bridge –Point”- from where all ration items were
                        distributed. The boarders had to carry their ration loads in the backs travelling hours and hours by foot-treck in the hilly treacherous mule tracks. The school had no road-connectivity then.
                    </Text>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The board students particularly Cl.X students had to face and appear the AISSE examination at GHSS Hayuliang (Examination Centre),which is approx.60Kms away from Hawai. At times during examination period of March month, the students had to face frequent road blockade and shortage of ration commodities due to torrential rains and landslides. Despite of all odds and tribulations, students excelled in studies and the school result of board examination found to be sound and excellent. With immense hardship faced by the students and teaching community, the school slow & steady led the pace for the growth of development and progress.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        With the public outcry & demand, along with the initiative of then,
                        (lt.)Kalikho Pul,Honb’le MLA/Minister and Ex-CM, Govt. of Arunachal Pradesh
                        upgraded this school to Higher Secondary standard by Govt.Notifiication Order
                        No.ED.3/136/2006-07/875 Dated Itanagar ,the 16/01/2007.
                    </Text>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school got REGULAR AFFILIATION STATUS to Senior Secondary Certificate
                        Examination (Classes XI to XII) w.e.f 01/04/2010 onwards with following subjects:-
                    </Text>

                    <List spacing={3}>
                        <ListItem fontFamily="body" fontSize="lg" fontWeight="semibold">
                            <ListIcon as={AiOutlineStar} color="teal.500" />
                            Core Language- English
                        </ListItem>
                        <ListItem fontFamily="body" fontSize="lg" fontWeight="semibold">
                            <ListIcon as={AiOutlineStar} color="teal.500" />
                            Elective Subjects:-Hindi,History,Political Science,Geography & Economics
                        </ListItem>
                    </List>

                    <Text fontFamily="body" fontSize="xl" fontWeight="semibold" >
                        (CBSE AFFILIATION ORDER NO.CBSE/Affl/2220120/2011/1451-54 Dated 18/01/2011)
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school organized grand UPGRADATION CEREMONY function i.e foundation day along with School Day during the month of OCTOBER’2008.The school community brought out a “Souvenir” to commemorate the occasion. Shri Kalikho Pul, then Finance Minister; Govt of A.P was the Chief-Guest of the occasion. Day long programme was organized to celebrate the function. Student enthrall the audience and public with their mesmerizing cultural performance. Upgradation of this school was certainly a Welcome step which will look after the needs of students pursuing higher studies. Upgradation of this school is a clarion call for new era.
                    </Text>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school has been catering the needs of many aspirants. The school
                        has now completing 50 yrs of its establishment during 2014 and the school is going in
                        phase of transition of progress and development with Golden Jubilee Year of its
                        establishment is due. During the last 50 yrs of establishment, the school has undergone manifold changes, ups and downs. Remoteness of this place instead of attracting teachers distracted them. There was no connectivity road, power supply and little communication. Still the
                        school to its credit has produced a good number of worthy citizens, who still feel pride
                        for their almameter. Once a small building housing only a few students and a single
                        teacher is now buzzing with hundreds of young budding students, well qualified
                        faculty, and an impressive school building along with sufficient number of classrooms.
                        Since the creation of Anjaw, the school has been a focal point of attraction for all
                        educational and cultural activities. Today this school is well road connected,
                        communicated with BSNL, well-electrified with 24 hrs uninterrupted power and water
                        supply and has a boarding facility for both boys & Girls.
                    </Text>
                </VStack>

            </Box>
        </Flex>
    );
}