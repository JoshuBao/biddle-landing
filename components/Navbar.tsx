import { Flex, Box, Slide, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <>
      <IconButton
        aria-label="Scroll down"
        icon={<IoIosArrowDown />}
        onClick={toggleProjects}
        size="lg"
        colorScheme="white"
        mb={4}
      />
      <Slide direction="bottom" in={showProjects} style={{ zIndex: 10 }}>
        <Flex align="center" justifyContent="center">  {/* Corrected from 'alignContent' to 'align' */}
          <Box m={2}>
            <Link href="/biddle" passHref>

              <ProjectCard title="Biddle"></ProjectCard> 

            </Link>
          </Box>
        </Flex>
      </Slide>
    </>
  );
};

export default Navbar;
