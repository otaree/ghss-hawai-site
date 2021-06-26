import {
    Flex,
    Box,
    Heading
} from '@chakra-ui/react';

import GalleryImage from '../components/GalleryImage';

const FacultyMembersImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/faculty-members.jpg";
const InternalViewSchoolImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/internal-view-school.jpg";
const SideViewSchoolImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/side-view-school.jpg";
const TeachersResidentialImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/teachers-residential.jpg";
const ScoutsGuidesImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/scouts-guides.jpg";
const ArialViewImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/aerial-view-school.jpg";
const SchoolFrontImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/school-front.jpg";
const GirlsHostelImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/girls-hostel.jpg";
const HawaiUrbanImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/hawai-urban-view.jpg";
const SchoolInside2Img = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/school-inside-2.jpg";
const SchoolRampImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/school-ramp.jpg";

export default function Gallery() {
    const pictures = [
        {
            img: SchoolFrontImg,
            title: 'Front View Of School'
        },
        {
            img: ArialViewImg,
            title: 'Arial View Of School'
        },
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
            img: GirlsHostelImg,
            title: 'Girls Hostel'
        },
        {
            img: HawaiUrbanImg,
            title: 'Hawai Urban'
        },
        {
            img: SchoolInside2Img,
            title: 'Inside view of School'
        },
        {
            img: ScoutsGuidesImg,
            title: "Scout & Guides"
        },
        {
            img: SchoolRampImg,
            title: "School Ramp"
        }
    ]
    return (
        <Box p={4}>
            <Heading textAlign="center" textTransform="uppercase" color="teal.400" textDecor="underline">Gallery</Heading>
            <Flex columns={[1, 3]} p={4} spacing={2} justifyContent="center" flexWrap="wrap">
                {
                    pictures.map((picture, i) => (
                        <GalleryImage key={i} image={picture.img} title={picture.title} />
                    ))
                }
            </Flex>
        </Box>
    );
}