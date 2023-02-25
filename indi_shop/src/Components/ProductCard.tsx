import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initData, product, state } from "../constants";
import { AiFillStar } from "react-icons/ai";

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
  gender,
  handleAdd,
}: cartProduct) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleAdd();
  };
  return (
    // maxW="sm" p="1%" h="500px"

    <Card
      h={{ base: "250px", md: "300px", lg: "400px" }}
      key={id}
      p="1%"
      alignItems={"center"}
    >
      <Link
        style={{ alignItems: "center", height: "60%" }}
        to={`/productDetails/${gender}/${id}`}
      >
        <Image h="100%" src={image} alt={brand} borderRadius="lg" />
      </Link>
      <Flex direction={"column"} alignItems="center">
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
        <Flex alignItems="center">
          <Text fontSize={{ base: "8px", md: "12px", lg: "15px" }}>
            Rating: {rating}
          </Text>
          <AiFillStar />
        </Flex>
      </Flex>
      {/* <Divider /> */}
      {/* <CardFooter> */}

      <Button
        w={{ base: "30%", md: "50%" }}
        h={{ base: "20px", md: "25px", lg: "30px" }}
        fontSize={{ base: "10px", md: "14px", lg: "17px" }}
        m="auto"
        mb="5px"
        colorScheme="pink"
        onClick={handleClick}
      >
        Add to cart
      </Button>
      {/* </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
