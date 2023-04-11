import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  GridItem,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useDisclosure,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
} from "@chakra-ui/react";
import { AddressCard } from "../Components/AddressCard";
import AuthNav from "../Components/AuthNav";
// import { useNavigate } from "react-router-dom";
import { Dispatch, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initData, state } from "../constants";
import { getcartData } from "../Redux/WomenReducer/action";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { AddIcon } from "@chakra-ui/icons";

export const AddressPage = () => {
  //   const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, products, cart }: initData = useSelector(
    (store: state) => store.womenData
  );

  let totalPrice: number = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  //   @ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  const { addresses } = user;
  console.log("user:", user);
  console.log("addresses:", addresses);

  useEffect(() => {
    dispatch(getcartData);
  }, []);
  //   console.log(cart);

  return (
    <div>
      {/* <AuthNav /> */}
      <Navbar />
      <Box display="flex" mt="10px">
        <Box w="600px" mt="15px" ml="350px">
          <Box>
            <Text
              textAlign="left"
              fontWeight="semibold"
              pl="20px"
              textDecoration="underline"
              fontSize={{ base: "12", sm: "18", md: "22", lg: "20" }}
            >
              Select Delivery Address
            </Text>
            <Text textAlign="start" pt="7px" pl="22px" fontSize="12px">
              PAY IN CASH
            </Text>
          </Box>

          {/* Form Display  */}
          <Box mt="0" ml="370px">
            <Button leftIcon={<AddIcon />} colorScheme="pink" onClick={onOpen}>
              ADD NEW ADDRESS
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              // initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">ADD ADDRESS</DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <form>
                      <Stack spacing={3}>
                        <FormControl id="name">
                          <FormLabel>Name</FormLabel>
                          <Input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                          />
                        </FormControl>

                        <FormControl id="phoneNumber">
                          <FormLabel>Phone Number</FormLabel>
                          <Input
                            type="tel"
                            value={phoneNumber}
                            onChange={(event) =>
                              setPhoneNumber(event.target.value)
                            }
                          />
                        </FormControl>

                        <FormControl id="address">
                          <FormLabel>Address</FormLabel>
                          <Input
                            type="text"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                          />
                        </FormControl>

                        <FormControl id="pincode">
                          <FormLabel>Pincode</FormLabel>
                          <Input
                            type="number"
                            value={pincode}
                            onChange={(event) => setPincode(event.target.value)}
                          />
                        </FormControl>

                        <FormControl id="city">
                          <FormLabel>City</FormLabel>
                          <Input
                            type="text"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                          />
                        </FormControl>

                        <FormControl id="state">
                          <FormLabel>State</FormLabel>
                          <Input
                            type="text"
                            value={state}
                            onChange={(event) => setState(event.target.value)}
                          />
                        </FormControl>
                      </Stack>
                    </form>
                  </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="pink">Submit</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
          <Box height="300px">
            {/* Address Card  */}
            <Box
              w="90%"
              ml="25px"
              color="black"
              borderRadius="5px"
              textAlign="justify"
            >
              <Grid templateColumns="repeat(1, 1fr)" gap="10px" pt="0px">
                {addresses.map((el: any) => (
                  <GridItem key={el.id}>
                    <AddressCard {...el} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Center mr="3px" mt="26px" height="300px" border="1px solid silver">
          <Divider orientation="vertical" />
        </Center>

        <Box w="350px" m="5" h="280px" ml="0" borderRadius="8px" mt="2px">
          <Box w="350px" borderRadius={5} p="2">
            <Text
              m="2"
              textAlign="left"
              fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
              fontWeight="semibold"
            >
              Price Detailes
            </Text>
            <Text
              m="2"
              textAlign="left"
              display="flex"
              fontSize={{ base: "2", sm: "4", md: "6", lg: "15" }}
              fontWeight="semibold"
            >
              Total Products Price
              <Text
                ml="105px"
                fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                fontWeight="bold"
              >
                ₹ {totalPrice}
              </Text>
            </Text>
            <Box
              borderRadius="5"
              mt="3"
              mb="2"
              w={{ base: "90%", sm: "90%", md: "90%", lg: "100%" }}
            >
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}
                      >
                        Order Total
                      </Box>
                      <Text
                        ml="135px"
                        color="green"
                        fontSize={{ base: "8", sm: "10", md: "16", lg: "20" }}
                        fontWeight="bold"
                      >
                        ₹ {totalPrice}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4} textAlign="left">
                      Your order qualifies for EMI with valid credit cards (not
                      available on purchase of Gold, Jewelry, Gift cards and
                      Amazon pay balance top up)
                    </AccordionPanel>
                  </h2>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};
