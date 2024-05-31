import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Navbar from './Navbar'

export default function Home() {
  return (
    <Box
      bgGradient="linear(to-r, black, blue.500, black)"
      color="white"
      minHeight="100vh"

    >
      <Navbar />
      <Flex
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        fontSize="xl"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Box flex={1} p={2}>
          <Heading>Welcome to Biddle</Heading>
          <Text mt={4}>
            Contact joshuacheng888@gmail.com for support!
          </Text>
        </Box>
        <Box flex={1} p={2} display="flex" alignItems="center" justifyContent="center">
          <Image
            src="/sample.png"
            alt="iPhone screenshot"
            objectFit="contain"
            maxW="20rem"
            maxH="100%"
            borderRadius={15}
          />
        </Box>
      </Flex>
    </Box>
  );
}