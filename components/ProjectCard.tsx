import { Box, Text, Image } from '@chakra-ui/react';

const ProjectCard: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Box position="relative" width="200px" height="300px">
            <Image src="/cocktail.svg" alt="Cocktail Glass" boxSize="100%" filter={'invert(1)'} />
            <Text position="absolute" top="30%" left="50%" transform="translate(-50%, -50%)" 
                  color="white" fontSize="lg" fontWeight="bold">
                {title}
            </Text>
        </Box>
    );
};

export default ProjectCard;
