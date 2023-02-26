import {
  Box,
  Text,
  GridItem,
  Button,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  Center,
  Divider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthNav from "../Components/AuthNav";
import { CartCard } from "../Components/CartCard";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initData, state } from "../constants";
import { getcartData } from "../Redux/WomenReducer/action";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const CartPage = () => {
  const navigate = useNavigate();
  const [change, setChange] = useState<boolean>(false);

  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, products, cart }: initData = useSelector(
    (store: state) => store.womenData
  );

  let totalPrice: number = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  // console.log(totalPrice);
  const handleChange = () => {
    setChange(!change);
  };

  useEffect(() => {
    dispatch(getcartData);
  }, [change]);
  // console.log(cart);

  return (
    <div>
      {/* <AuthNav /> */}
      <Navbar />
      <Box display="flex" mt="10px" mb="100px" backgroundColor={"white"}>
        <Box w="600px" mt="15px" ml="350px">
          <Text
            textAlign="left"
            fontWeight="semibold"
            pl="20px"
            textDecoration="underline"
            fontSize={{ base: "12", sm: "18", md: "22", lg: "20" }}
          >
            Cart Items
          </Text>
          <Box height="300px">
            {/* Card Cart  */}
            <Box
              w="90%"
              ml="25px"
              color="black"
              borderRadius="5px"
              textAlign="justify"
            >
              <Grid templateColumns="repeat(1, 1fr)" gap="10px" pt="0px">
                {cart.map((el) => (
                  <GridItem key={el.id}>
                    <CartCard {...el} handleDeleteItem={handleChange} />
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
              fontSize={{ base: "8", sm: "10", md: "16", lg: "18" }}
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
                  </h2>
                </AccordionItem>
                <Button
                  w="80%"
                  mt="2"
                  mb="2"
                  bgColor="#f43397"
                  color="white"
                  fontWeight="normal"
                  fontSize={{ base: "8", sm: "10", md: "16", lg: "18" }}
                  onClick={() => navigate("/address")}
                >
                  Continue to Buy
                </Button>
              </Accordion>
            </Box>
            <Image
              src="https://images.meesho.com/images/marketing/1588578650850.webp"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
