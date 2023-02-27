import {
  Box,
  HStack,
  Text,
  Button,
  Image,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { BsApple } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box bg="#f9f9f9" p="5" textAlign="left" m={"6% 0 0 0"}>
      <Grid templateColumns="repeat(6, auto)" gap="7" m="5% 10% 3%">
        <Box>
          <Text as="b" fontSize="35px">
            Shop Non-Stop on Meesho
          </Text>
          <Text color="grey">Trusted by more than 1Crore Indians</Text>
          <Text color="grey">Cash on Delivery | Free Delivery</Text>
          <HStack w="100%">
            <Button
              colorScheme="none"
              bg="black"
              color="white"
              w="170px"
              h="45px"
              m={"20px 0"}
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII="
                bg="black"
                marginRight={"10px"}
              />
              <VStack lineHeight="7px">
                <Text fontSize="8px" m={"0 43px 0 0"}>
                  GET IT ON
                </Text>
                <Text fontSize="15px">Google Play</Text>
              </VStack>
            </Button>
            <Button
              colorScheme="none"
              bg="black"
              color="white"
              w="170px"
              h="45px"
            >
              <BsApple color="white" size={25} />
              <VStack lineHeight="7px">
                <Text fontSize="8px" m={"0 13px 0 0"}>
                  Available on the
                </Text>
                <Text fontSize="15px">App Store</Text>
              </VStack>
            </Button>
          </HStack>
        </Box>
        <Box>
          <Text as="b" color="grey" fontSize="15px">
            Careers
          </Text>
          <br />
          <br />
          <Text as="b" color="grey" fontSize="15px">
            Become a supplier
          </Text>
          <br />
          <br />
          <Text as="b" color="grey" fontSize="15px">
            Hall of Fame
          </Text>
        </Box>
        <Box>
          <Text as="b" color="grey" fontSize="15px">
            Legal and Policies
          </Text>
          <br />
          <br />
          <Text as="b" color="grey" fontSize="15px">
            Meesho Tech Blog
          </Text>
          <br />
          <br />
          <Text as="b" color="grey" fontSize="15px">
            Notices and Returns
          </Text>
        </Box>
        <Box>
          <Text as="b" fontSize="15px">
            Reach out to us
          </Text>
          <br />
          <br />
          <HStack>
            <FaFacebook size="20px" color="#1877f2" />
            <FaInstagram size="20px" color="" />
            <FaYoutube size="20px" color="#ff0000" />
            <FaLinkedin size="20px" color="#2867b2" />
            <FaTwitter size="20px" color="#1d9bf0" />
          </HStack>
        </Box>
        <Box>
          <Text as="b" fontSize="15px">
            Contact Us
          </Text>
          <br />
          <br />
          <Text fontSize={"10px"}>
            Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
            06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
            Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
            E-mail address: query@meesho.com © 2015-2022 Meesho.com
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
