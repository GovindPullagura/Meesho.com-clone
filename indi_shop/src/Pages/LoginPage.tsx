import React from "react";
import AuthNav from "../Components/AuthNav";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Footer } from "../Components/Footer";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    let obj = {
      email: email,
      password: password,
    };
    axios
      .get(`https://indishop.onrender.com/users`)
      .then((r) => {
        let data = r.data;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === email && data[i].password === password) {
            toast({
              title: "Login Successfull.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            localStorage.setItem("user", JSON.stringify(data[i]));
            // **********************
            // @ts-ignore
            dispatch(login());
            // **********************
            navigate("/");
            return;
          }
        }
        toast({
          title: "Login Failed  Please Sign Up.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        navigate("/signup");
      })
      .catch((e) => {
        console.log(e);
        alert("error");
      });
  };

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
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name="password"
                    />
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
                    onClick={handleSubmit}
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
      <Footer />
    </Box>
  );
}
