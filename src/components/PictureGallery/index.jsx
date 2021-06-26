import {
    Flex,
} from '@chakra-ui/react';

import GalleryImage from '../GalleryImage';


const FacultyMembersImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/faculty-members.jpg";
const InternalViewSchoolImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/internal-view-school.jpg";
const SideViewSchoolImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/side-view-school.jpg";
const TeachersResidentialImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/teachers-residential.jpg";
const ScoutsGuidesImg = "https://ghss-hawai.s3.ap-south-1.amazonaws.com/scouts-guides.jpg";

export default function PictureGallery() {
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