import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
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
    <Card maxW="sm" key={id}>
      <CardBody>
        <Image src={image} alt={brand} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{brand}</Heading>
          <Text>
            {description} - {category}
          </Text>
          <Text>{colour}</Text>
          <Text>{size}</Text>
          <Text color="blue.600" fontSize="2xl">
            Rs. {price}
          </Text>
          <Text>{rating}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="ghost" colorScheme="blue">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
