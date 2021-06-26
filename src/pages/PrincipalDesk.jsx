import { useEffect} from 'react';
import {
    Box,
    Center,
    Text,
    VStack,
    Image,
    Flex,
    Heading
} from '@chakra-ui/react';

const PrincipalImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/principal.png";

export default function PrincipalDesk() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="teal.500" textAlign="center" textDecor="underline">PRINCIPAL'S DESK</Heading>
                <Box mb={4}>
                    <Center>
                        <Box borderRadius="md" shadow="md" p={2} overflow="hidden">
                            <Image boxSize="200px" name="Shri Nyamar Nyodu" src={PrincipalImg} />
                        </Box>
                    </Center>
                    <Text mt={2} textAlign="center" color="teal.600" fontWeight="bold" textDecoration="underline">Shri Nyamar Nyodu</Text>
                    <Text textAlign="center" color="teal.600" fontWeight="bold">Principal</Text>
                </Box>
                <VStack spacing={4}>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        I am extremely delighted that our institution situated at
                        one of the remotest area of Anjaw District (A.P) bordering China is launching its own
                        school website to the World. With great pride, I am here to inaugurate the launching of our school website.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        With profound gratitude I thank you for visiting our school website. We are here to
                        serve and enrich the students.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        At the outset of launching our own new school website, I extend a very warm welcome to one and all.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%" as="em" color="teal.500" fontWeight="semibold">
                        “There is joy in work. There is no happiness except in the realization that we have
                        accomplished something.”
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Welcome to our brand new school website! It is with great pride and pleasure we
                        announce the launching of our new school website.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Having acted rapidly upon practical suggestions from many of our parents and
                        guardians, we have designed this website to provide a comprehensive overview
                        aims and values, useful information, transparency and resources for pupils,
                        parents and patrons. With the way the new technology is always changing and
                        strengthening its offerings, we felt it was time to give our parents 8: students the
                        best possible. Our new school website is a huge step forward, streamlining the
                        way we convey information to parents and post the most current school schedule,
                        notices and immediate information’s.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Let us share what we love about our new website; while most visitors will be in
                        love with the new design and its look, the most impressive thing is additions to the
                        main navigation page include a various School Sections, student and Parents
                        corner and many others. The website features a navigation menu and updated
                        content so the required information can be sought in the blink of an eye.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Our school website can be viewed at your palms now, with a hot cup of tea and
                        snacks.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Our new website has been developed to showcase our strengths and reflect our
                        brand positioning. We know that making the website better than before is not
                        simply about giving it a new design, but understanding what you as the visitor
                        need. We did this by looking at what you said you expect from the website,
                        analysing numerous analytics and carrying out focus groups. We produced our
                        first concepts and tested these with current and prospective students, refining
                        them along the way before launching our website.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        We are launching the website in static mode and so we could get your feedback
                        — visitors were prompted to take part in a survey when visiting the website. Your
                        feedback helped us to see how we’ve done and where we could make more
                        improvements, before the new website went live.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Your feedbacks, suggestions and advises are always welcome for improvement
                        and standardisation of our school website.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The website has been designed and built to showcase the school’s fantastic
                        amenities, as well as the CBSE and govt. curriculum, day to day life and any
                        available extra-curricular activities and out of school care.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The main purpose of the new website is to provide current and prospective parents
                        with all the information they might require.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        One aspect of the new website that we’re particularly proud of is the stunning
                        photography that is featured throughout. The navigation has been structured to
                        ensure it is user friendly and meets appropriate guidelines. Overall, we think the
                        website successfully represents school values and will hopefully help us increase
                        brand awareness.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        As you pursue our website, you will find comprehensive overview of our school
                        programes and services. The dynamic changes in today’s educational environment
                        demand persistent efforts from both the teachers and the students. The launching of
                        our school website is one step forward in this regard.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        <Text as="em" color="teal.500">Govt.Hr.Sec.School Hawai</Text> is a premier institute of the state and one lone higher
                        institute of learning situated at the district headquarter of Anjaw District. We have
                        highly competent experienced faculties and well disciplined students worthy to make
                        their mark in all spheres of life. | feel privilege to lead such a vibrant institution that
                        offers enormous opportunities to the students. We are proud of our inclusive ethos
                        where we set high standard and expectation from our students to achieve their very
                        best. From the moment a student enters our school, we want them to feel a sense of
                        happiness and belonging, as it is essential to their future success.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school is affiliated to CBSE Board and duly been recognized by the Govt. of
                        Arunachal Pradesh. All mandatory documents laid down by the CBSE and the govt.,
                        required for opening of a institute of learning is made available at the school website
                        ”Home page” — under the link Icon -
                    </Text>

                    <Text textDecor="underline" fontFamily="heading" fontSize="2xl" fontWeight="semibold" w="100%" textAlign="center" color="teal.500">
                        Mandatory Public Disclosures
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">

                        The school has a sprawling campus and a spacious, newly school building
                        infrastructure, housing well ventilated and sound classrooms, science Laboratories,
                        computer-cum-smart classrooms and other gadgets to enhance the teaching
                        learning process, a library with books on various journals and subjects, Auditorium,
                        Play Ground, Computers, Audio-visual Equipments, sufficient Staff Quarters, Boys
                        and Girls Hostels, NCC, NSS, Scouts and Guides. The school has the 24 hours
                        electrical and water connections and sufficient no.of Toilets for Boys and Girls,
                        washrooms and urinals, surrounded by R00 pucca boundary walls with entrance
                        Gates.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Special Ramps has been incorporated in the school building campus, conducive and
                        congenial to the disabled students and parents.
                    </Text>



                    <Text fontFamily="body" fontSize="xl" w="100%">
                        I warmly welcome you to visit our campus. I am sure that you will appreciate the
                        caring and dynamic culture that is so much a part of our state. Our school is
                        dedicated to nurture responsive and motivated students through a dynamic and
                        success oriented education program.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Our mission is in developing well rounded individuals who demonstrate resilience,
                        determination and strength of character. We are determining to equip the students
                        with skills required to access all opportunities and accordingly enhancing their life
                        chances. We work hard for developing this institution an inspirational school and
                        aims to empowers students to exercise their talents responsibly by leading a
                        fulfilling life and making an active contributions towards social justice and the
                        common good. The school strives to provides the students with a stimulating and
                        safe environment in order for meaningful learning to take place.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
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

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        On this occasion, I once again take this opportunity to recognise, with a deep sense
                        of appreciation, your dedication and readiness to learn and adapt to technology and
                        take teaching through digital modes during these trying times of CO VID 19
                        pandemic. Moving away from the traditional methods of teaching must have been
                        challenging, but your dedication, improvisation, quick adaptability and your
                        relentless efforts have ensured the smooth and continuous transaction of academic
                        activities which is highly commendable.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        One aspect of the new website that we’re particularly proud of is the stunning
                        photography that is featured throughout. The navigation has been restructured to
                        ensure it is user friendly and meets appropriate guidelines. Overall, we think the
                        website successfully represents school values and will hopefully help us increase
                        brand awareness.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        We hope you find it useful by viewing our school website. If you do happen to spot
                        any issues, we’d appreciate the feedback, so don’t hesitate to get in touch.
                    </Text>


                    <Text fontFamily="body" fontSize="xl" w="100%">
                        We will keep on working and updating our school website upon your feedbacks and
                        suggestions.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school family of GHSS Hawai once again acknowledges sincere thanks and
                        gratitude for viewing our school website.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%" as="em" color="teal.500" fontWeight="semibold">
                        With all good wishes
                    </Text>
                </VStack>
            </Box>
        </Flex>
    );
}