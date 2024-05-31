import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from '../Navbar'

export default function PrivacyPolicy() {
    return (
        <Box
            bgGradient="linear(to-r, black, blue.500, black)"
            minHeight="100vh"
            color="white"
        >
            <Navbar />
            <Box
                textAlign="center"
                fontSize="xl"
                p={4}
                overflowY="auto"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box p={2} marginTop={'10'}>
                    <Heading>Privacy Policy</Heading>
                    <Text mx={5} fontSize="md" mt={2}>
                        Thank you for choosing Biddle! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our mobile application, Biddle.
                        <br /><br />
                        1. Information We Collect
                        <br />
                        When you use Biddle, we may collect the following personal information:
                        <br />
                        Name
                        <br />
                        Phone number
                        <br /><br />
                        2. How We Use Your Information
                        <br />
                        We use the information collected from you for the following purposes:
                        <br />
                        Personalizing your experience and delivering the content and features of Biddle to you.
                        <br />
                        Responding to your inquiries, questions, and/or other requests.
                        <br />
                        Improving our application and enhancing user experience.
                        <br />
                        Sending you administrative information, such as updates, security alerts, and support messages.
                        <br /><br />
                        3. Data Security
                        <br />
                        We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                        <br /><br />
                        4. Data Sharing
                        <br />
                        We do not sell, trade, or otherwise transfer your personal information to third parties. Your data is solely used for the purposes outlined in this Privacy Policy.
                        <br /><br />
                        5. Data Retention
                        <br />
                        We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                        <br /><br />
                        6. Changes to This Privacy Policy
                        <br />
                        We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on this page.
                        <br /><br />
                        7. Contact Us
                        <br />
                        If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us at joshuacheng888@gmail.com.
                        <br /><br />
                        By using Biddle, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our application.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

