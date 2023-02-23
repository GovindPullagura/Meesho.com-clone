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
import { product } from "../constants";

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
}: product) => {
  return (
    <Card maxW="sm" p="1%" h="500px" key={id}>
      <CardBody>
        <Image src={image} alt={brand} borderRadius="lg" />
        <Flex direction={"column"}>
          <Heading size="md">{brand}</Heading>
          <Text fontSize={"15px"}>{description}</Text>
          {/* <Text>{colour}</Text> */}
          {/* <Text>{size}</Text> */}
          <Text fontWeight={"bold"}>Rs. {price}</Text>
          <Text>Rating: {rating}</Text>
        </Flex>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter> */}
      <Button w="50%" h="30px" m="auto" colorScheme="blue">
        Add to cart
      </Button>
      {/* </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
