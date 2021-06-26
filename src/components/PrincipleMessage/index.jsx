import {
    Box,
    Center,
    Flex,
    Avatar,
    Text,
    Icon,
    Heading,
    Button,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const PrincipalImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/principal.png";

export default function PrincipleMessage() {
    const history = useHistory();

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
                                onClick={() => history.push('/principal-desk')}
                            >
                                Read More
                            </Button>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

