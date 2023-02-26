import React from 'react'
import {
    Flex,
    Box,
    Text,
    Divider,
    Image,
    Button,
    SimpleGrid,
} from "@chakra-ui/react";
import { product } from "../constants";

export const CartCard = ({
    id,
    image,
    brand,
    description,
    colour,
    price,
    size,
}: product) => {

    return (
        <div>
            <Box w="100%" m="0" p="10px" borderRadius='8px' background={"#fdeced"} >
                <Divider />
                <Flex>
                    <Box w={{ base: "26%", sm: "24%", md: "22%", lg: "25%" }}>
                        <Image
                            m="auto"
                            h={{ base: "80px", sm: "120px", md: "160px", lg: "200px" }}
                            w={{ base: "80px", sm: "120px", md: "160px", lg: "200px" }}
                            src={image}
                            alt={brand}
                            border='3px solid #f43397'
                            borderRadius='5px'
                        />
                    </Box>
                    <Box w={{ base: "58%", sm: "57%", md: "56%", lg: "64%" }}>
                        <Text
                            noOfLines={2}
                            fontWeight="semibold"
                            textAlign="left"
                            fontSize={{ base: "6", sm: "8", md: "10", lg: "16" }}
                            pl='15px'
                            mt="2"
                            mb="1"
                        >
                            {description}
                        </Text>
                        <Text
                            noOfLines={2}
                            fontWeight="semibold"
                            textAlign="left"
                            fontSize={{ base: "6", sm: "8", md: "10", lg: "16" }}
                            pl='15px'
                            mt="2"
                            mb="1"
                        >
                            Size: {size}
                        </Text>
                        <Text
                            noOfLines={2}
                            fontWeight="semibold"
                            textAlign="left"
                            fontSize={{ base: "6", sm: "8", md: "10", lg: "16" }}
                            pl='15px'
                            mt="2"
                            mb="1"
                        >
                            Price: {price}
                        </Text>
                        <Text
                            textAlign="left"
                            color="green"
                            fontSize={{ base: "6", sm: "8", md: "10", lg: "12" }}
                            pl='15px'
                        >
                            In stock
                        </Text>
                        <Text
                            color="gray"
                            textAlign="left"
                            fontSize={{ base: "3", sm: "5", md: "7", lg: "11" }}
                            pl='15px'
                            mt="1"
                            mb="1"
                        >
                            Eligible for FREE Shipping
                        </Text>
                        <SimpleGrid w="70%" minChildWidth="30px" gap="2">
                            <Button
                                color="blue.500"
                                fontSize={{ base: "5", sm: "10", md: "14", lg: "18" }}
                                bg="none"
                                pl='25px'
                            >
                                Delete
                            </Button>
                        </SimpleGrid>
                    </Box>
                    <Box
                        w={{ base: "16%", sm: "18%", md: "22%", lg: "16%" }}
                        fontWeight="semibold"
                        fontSize={{ base: "8", sm: "10", md: "14", lg: "18" }}
                    >
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}
