import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Divider, HStack, StackDivider, Text } from "@chakra-ui/layout";
import React from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return <div>
    <Navbar />
    <HStack textAlign={'left'} w='60%' m='auto' mt='60px'>
      <Box bg='#f9f9f9' h='100%' w={'70%'} p='65px'>
        <Text as='b' fontSize={'55px'} lineHeight='60px'>Lowest Prices Best Quality Shopping</Text>
        <HStack divider={<StackDivider borderColor='black' />} bg='white' marginTop={'40px'} p='3' borderRadius={'10px'} w='100%' padding='15px'>
          <HStack>
            <Image src="https://images.meesho.com/images/pow/freeDelivery.svg" borderRadius={'50%'} bg='#f0a9c8' w={'40px'} h='40px' />
            <Text as='b' fontSize='17px'>Free<br />Delivery</Text>
          </HStack>
          <HStack>
            <Image src="https://images.meesho.com/images/pow/cod.svg" borderRadius={'50%'} bg='#f0a9c8' w={'40px'} h='40px' />
            <Text as='b' fontSize='17px'>Cash on<br />Delivery</Text>
          </HStack>
          <HStack>
            <Image src="https://images.meesho.com/images/pow/easyReturns.svg" borderRadius={'50%'} bg='#f0a9c8' w={'40px'} h='40px' />
            <Text as='b' fontSize='17px'>Easy<br />Returns</Text>
          </HStack>
        </HStack>
        <Button colorScheme={'none'} color='white' bg='#f43397' w='90%' h='60px' fontSize={'23px'} mt={'40px'}>
          <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII=' bg='#f43397' marginRight={'20px'} w='35px' />
          Download the Meesho App
        </Button>
      </Box>
      <Box>
        <Image src='https://images.meesho.com/images/marketing/1631722939962.webp' w={'100%'} ml='-8px' />
      </Box>
    </HStack>
    <HStack w='60%' m='auto' mt='60px'>
      <Divider borderColor={'#f43397'} w='20%'/>
        <Text as='b' fontSize={'5xl'}>Top Categories to choose from</Text>
      <Divider borderColor={'#f43397'} w='20%'/>
    </HStack>
    <Box bg='#fde1d3'w='60%' m='auto' mt='60px' h='600px' borderRadius={'10px'}>
      <Text fontFamily={'cursive'} fontSize='7xl' p='5% 0 0 40%'>Fashion Store</Text>
      <HStack p={2}>
        <Button colorScheme={'none'} >
          <Image src='https://images.meesho.com/images/marketing/1649760442043.webp'/>
        </Button>
        <Button colorScheme={'none'} pt='25%'>
        <Image src='https://images.meesho.com/images/marketing/1649760423313.webp'/>
        </Button>
        <Button colorScheme={'none'} pt='25%'>
        <Image src='https://images.meesho.com/images/marketing/1649759799809.webp'/>
        </Button>
      </HStack>
    </Box>
    <Footer />
  </div>;
};

export default Home