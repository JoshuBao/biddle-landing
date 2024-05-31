import Link from 'next/link'
import { Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-around" bg='transparent' p={4} >
      <Link href="/biddle">Home</Link>
      <Link href="/biddle/privacy">Privacy Policy</Link>
    </Box>
  );
}