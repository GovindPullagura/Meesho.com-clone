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
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import AuthNav from "../Components/AuthNav";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Footer } from "../Components/Footer";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    let obj = {
      id: email,
      name: firstName,
      password: password,
      mobile: mobileNum,
      addresses: [],
      orders: [],
    };
    if (
      firstName.length == 0 &&
      lastName.length == 0 &&
      email.length == 0 &&
      password.length == 0
    ) {
      toast({
        title: "Please Fill The Form.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    } else if (password.length < 5) {
      toast({
        title: "password need minimum six characters.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    axios
      .post(`https://indishop.onrender.com/users`, obj)
      .then((r) => {
        console.log(r);
        toast({
          title: "User Registered Succsfull please login.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: "Please Signup here.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
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
              <Stack spacing={4}>
                <Image
                  borderRadius="7px"
                  src="https://images.meesho.com/images/marketing/1661417516766.webp"
                />
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} textAlign={"center"}>
                    Sign up
                  </Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our cool features ✌️
                  </Text>
                </Stack>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="enter your first name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="enter your last name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
                <FormControl id="number" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="enter your mobile number"
                    onChange={(e) => setMobileNum(e.target.value)}
                    value={mobileNum}
                  />
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
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link to="/login" color={"blue.400"}>
                      <Text
                        textDecoration="underline"
                        color="blue"
                        fontSize="18px"
                        _hover={{
                          color: "#f43397",
                        }}
                      >
                        Login
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
