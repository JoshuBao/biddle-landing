'use client'
import { Box, Text, VStack, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
});

const HomePage = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg="black">
        <Text fontSize="4xl" color="white">Welcome to JazzBar</Text>
        <Navbar />
      </VStack>
    </ChakraProvider>
  );
};

export default HomePage;
