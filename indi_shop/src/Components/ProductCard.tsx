import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { product } from "../constants";

interface cartProduct extends product {
  handleAdd: () => void;
}

const ProductCard = ({
  id,
  image,
  brand,
  description,
  colour,
  price,
  size,
  rating,
  category,
  handleAdd,
}: cartProduct) => {
  return (
    // maxW="sm" p="1%" h="500px"
    <Card
      h={{ base: "250px", md: "300px", lg: "400px" }}
      key={id}
      p="1%"
      alignItems={"center"}
    >
      <Image h="60%" src={image} alt={brand} borderRadius="lg" />
      <Flex direction={"column"}>
        <Heading size={{ base: "xs", md: "s", lg: "md" }}>{brand}</Heading>
        <Text fontSize={{ base: "8px", md: "12px", lg: "15px" }}>
          {description}
        </Text>
        {/* <Text>{colour}</Text> */}
        {/* <Text>{size}</Text> */}
        <Text
          fontSize={{ base: "8px", md: "12px", lg: "15px" }}
          fontWeight={"bold"}
        >
          Rs. {price}
        </Text>
        <Text fontSize={{ base: "8px", md: "12px", lg: "15px" }}>
          Rating: {rating}
        </Text>
      </Flex>
      {/* <Divider /> */}
      {/* <CardFooter> */}
      <Button
        w={{ base: "30%", md: "50%" }}
        h={{ base: "20px", md: "25px", lg: "30px" }}
        fontSize={{ base: "10px", md: "14px", lg: "17px" }}
        m="auto"
        mb="5px"
        colorScheme="blue"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        Add to cart
      </Button>
      {/* </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
