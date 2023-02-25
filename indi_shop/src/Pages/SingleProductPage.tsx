import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { product, state } from "../constants";
import { AiFillStar } from "react-icons/ai";

const SingleProductPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [product, setProduct] = useState<product[] | []>([]);

  const getData = (id: string | undefined, gender: string | undefined) => {
    return axios(`https://indishop.onrender.com/${gender}/${id}`);
  };

  console.log(product);
  useEffect(() => {
    setIsLoading(true);
    getData(params.id, params.gender)
      .then((res: AxiosResponse<product>) => {
        setProduct([...product, res.data]);
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Heading>Loading...</Heading>
      ) : isError ? (
        <Heading>Something went wrong...</Heading>
      ) : (
        <Box>
          {/* {product.map((el) => (
            <Flex key={el.id} direction={"row"}>
              <Image key={el.id} src={el.image} />
              <Stack>
                <Heading> {el.brand} </Heading>
                <Text>{el.description}</Text>
                <Text fontWeight={"bold"}>Price: Rs.{el.price}</Text>
              </Stack>
            </Flex>
          ))} */}
          {product.map((item) => (
            <Flex
              // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              border={"1px solid grey"}
              borderRadius="30px"
              p="10px"
              w="70%"
              bgColor={"white"}
              key={item.id}
              m="auto"
              mt="100px"
            >
              <Spacer />
              <Image
                // w="300px"
                // h="400px"
                w="20%"
                h="100%"
                src={item.image}
                alt={item.brand}
              />
              <Spacer />
              <Box mt="0" textAlign={"left"}>
                <Heading fontSize={{ base: "15px", md: "18px", lg: "20px" }}>
                  {item.brand}
                </Heading>
                <Text fontSize={{ base: "13px", md: "15px", lg: "18px" }}>
                  {item.description}
                </Text>
                <Text fontSize={{ base: "13px", md: "15px", lg: "18px" }}>
                  Size: {item.size}
                </Text>
                <Text
                  as="b"
                  fontSize={{ base: "13px", md: "15px", lg: "18px" }}
                >
                  Rs. {item.price}
                </Text>
                <Text fontSize={"2xs"} color="gray">
                  Inclusive of all taxes
                </Text>
                <Box
                  w="25%"
                  color={"white"}
                  borderRadius="20px"
                  pt={"1%"}
                  pl="4%"
                  h={{ base: "23px", md: "26px", lg: "30px" }}
                  bgColor="rgb(36,187,117)"
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Flex
                    fontWeight={"bold"}
                    alignItems={"center"}
                    textAlign={"center"}
                    fontSize={{ base: "13px", md: "15px", lg: "18px" }}
                  >
                    {item.rating}.0 <AiFillStar />
                  </Flex>
                </Box>
                <Text fontSize={{ base: "10px", md: "13px", lg: "15px" }}>
                  Free delivery
                </Text>
                <Button
                  w="100%"
                  borderRadius={"10px"}
                  mt={{ base: "20px", lg: "40px" }}
                  color={"white"}
                  bgColor={"rgb(239,78,40)"}
                  _hover={{ bgColor: "rgb(229,68,20)" }}
                >
                  Add to Cart
                </Button>
              </Box>
              <Spacer />
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SingleProductPage;
