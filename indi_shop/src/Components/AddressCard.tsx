import React from 'react'
import {
    Flex,
    Box,
    Text,
    Button,
    SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AddressCard = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Flex w="100%" mt='15px' borderRadius='8px' background={"#fdeced"}>
                <Box w={{ base: "58%", sm: "57%", md: "56%", lg: "64%" }}>
                    <Text textAlign="left" fontWeight="semibold" pl='10px' fontSize={{ base: "12", sm: "15", md: "18", lg: "20" }}>
                        Name:
                    </Text>
                    <Text textAlign="left" fontWeight="semibold" pl='10px' fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}>
                        House no:
                    </Text>
                    <Text textAlign="left" fontWeight="semibold" pl='10px' fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}>
                        Road Name/ Area:
                    </Text>
                    <Text textAlign="left" fontWeight="semibold" pl='10px' fontSize={{ base: "8", sm: "10", md: "15", lg: "18" }}>
                        Pincode:
                    </Text>
                    <SimpleGrid w="100%" minChildWidth="30px" gap="2">
                        <Button w="100%" mt="2" mb="2" ml='15px' bgColor="#f43397" color='white' fontWeight="normal" fontSize={{ base: "8", sm: "10", md: "13", lg: "15" }} onClick={() => navigate("/payment")}>
                            Deliver to this Address
                        </Button>
                        <Button w="100%" mt="2" mb="2" ml='130px' bgColor="green" color='white' fontWeight="normal" fontSize={{ base: "5", sm: "8", md: "10", lg: "12" }}>
                            Delete this Address
                        </Button>
                    </SimpleGrid>
                </Box>
            </Flex>
        </div>
    )
}
