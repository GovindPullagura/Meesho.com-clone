import React from "react";
import AuthNav from "../Components/AuthNav";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <AuthNav />
      <Box w="100%" h="700px">
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg="#fdeced">
          <Stack spacing={7} mx={"auto"} maxW={"lg"} py={4} px={6}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Image
                borderRadius="7px"
                src="https://images.meesho.com/images/marketing/1661417516766.webp"
              />
              <Stack mt="15px" mb="10px">
                <Text
                  fontSize="20px"
                  color={"gray.600"}
                  textColor="black"
                  fontWeight="600"
                >
                  Login to view your profile ✌️
                </Text>
              </Stack>
              <Stack spacing={3}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg="#f43397"
                    color={"white"}
                    _hover={{
                      bg: "#f43397",
                      color: "black",
                    }}
                  >
                    Log in
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Don`t Have Account ? Lets Create here.....
                    <Link to="/signup">
                      <Text
                        textDecoration="underline"
                        color="blue"
                        fontSize="18px"
                        _hover={{
                          color: "#f43397",
                        }}
                      >
                        Sign Up
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
