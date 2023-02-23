import { Box, HStack, Text, Button, Image, VStack, Grid } from '@chakra-ui/react';
import { BsApple } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin,FaTwitter } from 'react-icons/fa';

export const Footer = () => {

  return <Box bg='#f9f9f9' p='5' textAlign='left' >
    <Grid templateColumns='repeat(6, auto)'>
      <Box>
        <Text as='b' fontSize='40px'>Shop Non-Stop on Meesho</Text>
        <Text color='grey'>Trusted by more than 1Crore Indians</Text>
        <Text color='grey'>Cash on Delivery | Free Delivery</Text>
        <HStack w='100%'>
          <Button colorScheme='none' bg='black' color='white' w='200px' h='50px' m={'25px 0'}>
                  <Image src='data:image/png;base64,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' w='60px' />
                  <VStack lineHeight='7px'>
                    <Text fontSize='10px' m={'0 60px 0 0'}>GET IT ON</Text>
                    <Text fontSize='20px'>Google Play</Text>
                  </VStack>
          </Button>
          <Button colorScheme='none'  bg='black' color='white' w='200px' h='50px' >
                  <BsApple color='white' size={25} />
                  <VStack lineHeight='7px'>
                    <Text fontSize='10px' m={'0 15px 0 0'}>Available on the</Text>
                    <Text fontSize='20px'>App Store</Text>
                  </VStack>
          </Button>
        </HStack>
      </Box>
      <Box>
        <Text as='b' color='grey' fontSize='20px'>Careers</Text>
        <br/>
        <br/>
        <Text as='b' color='grey' fontSize='20px'>Become a supplier</Text>
        <br/>
        <br/>
        <Text as='b' color='grey' fontSize='20px'>Hall of Fame</Text>
      </Box>
      <Box>
        <Text as='b' color='grey' fontSize='20px'>Legal and Policies</Text>
        <br/>
        <br/>
        <Text as='b' color='grey' fontSize='20px'>Meesho Tech Blog</Text>
        <br/>
        <br/>
        <Text as='b' color='grey' fontSize='20px'>Notices and Returns</Text>
      </Box>
      <Box>
        <Text as='b' fontSize='20px'>Reach out to us</Text>
        <br/>
        <br/>
        <HStack>
          <FaFacebook size='30px' color='#1877f2'/>
          <FaInstagram size='30px' color=''/>
          <FaYoutube size='30px' color='#ff0000'/>
          <FaLinkedin size='30px' color='#2867b2'/>
          <FaTwitter size='30px' color='#1d9bf0'/>
        </HStack>
      </Box>
      <Box>
        <Text as='b' fontSize='20px'>Contact Us</Text>
        <br/>
        <br/>
        <Text></Text>
      </Box>
    </Grid>
  </Box>
  
}