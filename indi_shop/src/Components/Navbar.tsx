import { Link } from "react-router-dom";
import { Box, Image, Input, HStack, InputGroup, InputLeftElement, Button, Text, VStack, StackDivider, Popover, PopoverTrigger, PopoverContent, PopoverBody, Wrap, WrapItem, Grid } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { TfiMobile } from 'react-icons/tfi';
import { IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';
import { BsCart, BsApple, BsPersonCircle } from 'react-icons/bs';
import { SlBag } from 'react-icons/sl';
import { GrUserAdmin } from 'react-icons/gr';
import React, { useState } from "react";

const Navbar = () => {
  const [search, setSearch]=useState('');

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return <Box position={'sticky'} top={'0%'} bg={'white'} zIndex='999'>
    <HStack height='70px' boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;' spacing={'10'} textAlign='center' justifyContent='center'>
      <Link to={"/"}><Image src="./Indishop_logo.png" alt='logo' width='130px' /></Link>
      <InputGroup width='400px'>
        <Input type='text' placeholder='Try Saree, Kurti' id='search' h='40px' onChange={(e)=>handleSearch(e)}/>
        <InputLeftElement>
          <CiSearch size={'30px'} color='#707070' />
        </InputLeftElement>
      </InputGroup>
      <HStack divider={<StackDivider borderColor='gray.200' h='70px'/>}>
        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Button colorScheme='none' color='black' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='70px' fontSize='15px'><TfiMobile />Download App</Button>
          </PopoverTrigger>
            <PopoverContent p={4} w='220px' m={'-8px 0 0 0'}>
              <PopoverBody>
                <Text fontSize='15px' >Download From a</Text>
                <Button colorScheme='none' bg='black' color='white' w='170px' h='45px' m={'20px 0'}>
                  <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII=' bg='black' marginRight={'10px'}/>
                  <VStack lineHeight='7px'>
                    <Text fontSize='8px' m={'0 43px 0 0'}>GET IT ON</Text>
                    <Text fontSize='15px'>Google Play</Text>
                  </VStack>
                </Button>
                <Button colorScheme='none' bg='black' color='white' w='170px' h='45px'>
                  <BsApple color='white' size={25} />
                  <VStack lineHeight='7px'>
                    <Text fontSize='8px' m={'0 13px 0 0'}>Available on the</Text>
                    <Text fontSize='15px'>App Store</Text>
                  </VStack>
                </Button>
              </PopoverBody>
            </PopoverContent>
        </Popover>

        <Button colorScheme='none' color='black' fontSize='15px'>Become a Supplier</Button>

        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Button colorScheme='none' color='black' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='70px' fontSize='15px'><IoPersonOutline />Profile</Button>
          </PopoverTrigger>
          <PopoverContent w='fit' m={'-8px 0 0 0'}>
            <PopoverBody>
               {/* <VStack divider={<StackDivider borderColor='gray.200' />} align='left'>
              <HStack>
                <BsPersonCircle size='35px' color='#e4edff'/>
                <Box>
                  <Text as='b' fontSize='15px'>Hello User</Text>
                  <Text>+91 xxxxxxxxxx</Text>
                </Box>
              </HStack>
              <Button colorScheme='none' color='black' m={'0 55px 0 0'} p={0}>
                <SlBag />
                <Text fontSize='15px' p='0 0 0 15px'>My Orders</Text>
              </Button>
              <Button colorScheme='none' color='black' m={'0 75px 0 0'} p={0}>
                <GrUserAdmin />
                <Text fontSize='15px' p='0 0 0 13px'><Link to='/admin'>Admin</Link></Text>
              </Button>
              <Button colorScheme='none' color='black' m={'0 50px 0 0'} p={0}>
                <IoLogOutOutline size='20px'/>
                <Text fontSize='15px' p='0 30px 0 10px'>Logout</Text>
              </Button>
              </VStack>  */}
              <VStack divider={<StackDivider borderColor='gray.200' />} textAlign='left' p={2}>
                <HStack>
                  <Box>
                    <Text as='b' fontSize='15px'>Hello User</Text>
                    <Text fontSize='10px'>To access your Meesho account</Text>
                    <br />
                    <Button colorScheme='none' bg={'#f43397'} color='white' w='100%' fontSize='15px' h='40px'><Link to='/signup'>Sign Up</Link></Button>
                  </Box>
                </HStack>
                <Button colorScheme='none' color='black' m={'0 50px 0 0'} p={0}>
                  <SlBag />
                  <Text fontSize='15px' p='0 0 0 15px'>My Orders</Text>
                </Button>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Button colorScheme='none' color='black' fontSize='15px'><Link to='/cart'><BsCart />Cart</Link></Button></HStack>
    </HStack>
    <HStack height='50px' boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'  justifyContent='center'>
      <Wrap spacing={'5'}>
        <WrapItem>
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black'  borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'><Link to='/womenPage'>Women Ethnic</Link></Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)' >
                    <VStack p={2}>
                      <Text as='b' color='#f43397' m='10px'>All Women Ethnic</Text>
                      <Text><Link to='/womenPage'>View All</Link></Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Sarees</Text>
                      <Text>All Sarees</Text>
                      <Text> Silk Sarees</Text>
                      <Text>Cotton Silk Sarees</Text>
                      <Text>Cotton Sarees</Text>
                      <Text>Georgette Sarees</Text>
                      <Text>Chiffon Sarees</Text>
                      <Text>Satin Sarees</Text>
                      <Text>Embroidered Sarees</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Kurtis</Text>
                      <Text>All Kurtis</Text>
                      <Text> Anarkali Kurtis</Text>
                      <Text>Rayon Kurtis</Text>
                      <Text>Cotton Kurtis</Text>
                      <Text>Embroidered Kurtis</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Kurta Sets</Text>
                      <Text>All Kurta Sets</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Suits & Dress Material</Text>
                      <Text>All Suits & Dress Material</Text>
                      <Text>Cotton Suits</Text>
                      <Text>Embroidered Suits</Text>
                      <Text>Chanderi Suits</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Other Ethnic</Text>
                      <Text>Blouses</Text>
                      <Text>Dupattas</Text>
                      <Text>Lehanga</Text>
                      <Text>Gown</Text>
                      <Text>Ethnic Bottomwear</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'><Link to='/womenPage'>Women Western</Link></Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Topwear</Text>
                      <Text>Tops</Text>
                      <Text>Dresses</Text>
                      <Text>Sweaters</Text>
                      <Text>Jumpsuits</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} align='left' p={2}>
                      <Text as='b' color='#f43397' m='10px 0'>Bottomwear</Text>
                      <Text>Jeans</Text>
                      <Text>Jeggings</Text>
                      <Text>Palazzos</Text>
                      <Text>Shorts</Text>
                      <Text>Skirts</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Innerwear</Text>
                      <Text>Bra</Text>
                      <Text>Briefs</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} align='left' p={2}>
                      <Text as='b' color='#f43397' m='10px 0'>Sleepwear</Text>
                      <Text>Nightsuits</Text>
                      <Text>Babydolls</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'><Link to='/menPage'>Men</Link></Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Top Wear</Text>
                      <Text>All Top Wear</Text>
                      <Text>Tshirts</Text>
                      <Text>Shirts</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Bottom Wear</Text>
                      <Text>Track Pants</Text>
                      <Text>Jeans</Text>
                      <Text>Trousers</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Men Accessories</Text>
                      <Text>All Men Accessories</Text>
                      <Text>Watches</Text>
                      <Text>Belts</Text>
                      <Text>Wallets</Text>
                      <Text>Jewellery</Text>
                      <Text>Sunglasses</Text>
                      <Text>Bags</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Men Footwear</Text>
                      <Text>Casual Shoes</Text>
                      <Text>Sports Shoes</Text>
                      <Text>Sandals</Text>
                      <Text>Formal Shoes</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Ethnic Wear</Text>
                      <Text>Men Kurtas</Text>
                      <Text>Ethnic Jackets</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Inner & Sleep Wear</Text>
                      <Text>All Inner & Sleep Wear</Text>
                      <Text>Vests</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'><Link to='boysPage'>Boys</Link></Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)' >
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Boys 2+ Years</Text>
                      <Text>Not Dresses</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Infant 0-2 Years</Text>
                      <Text>Rompers</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Toys & Accessories</Text>
                      <Text>Soft Toys</Text>
                      <Text>Footwear</Text>
                      <Text>Stationary</Text>
                      <Text>Watches</Text>
                      <Text>Bags & Backpacks</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Baby Care</Text>
                      <Text>All Baby Care</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'><Link to='girlsPage'>Girls</Link></Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)' >
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Girls 2+ Years</Text>
                      <Text>Dresses</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Infant 0-2 Years</Text>
                      <Text>Rompers</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Toys & Accessories</Text>
                      <Text>Soft Toys</Text>
                      <Text>Footwear</Text>
                      <Text>Stationary</Text>
                      <Text>Watches</Text>
                      <Text>Bags & Backpacks</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Baby Care</Text>
                      <Text>All Baby Care</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'>Home & Kitchen</Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'}m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Home Furnishing</Text>
                      <Text>Bedsheets</Text>
                      <Text>Doormats</Text>
                      <Text>Curtains & Sheers</Text>
                      <Text>Cushion & Cushion Covers</Text>
                      <Text>Mattress Protectors</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Home Decor</Text>
                      <Text>All Home Decor</Text>
                      <Text>Stickers</Text>
                      <Text>Clocks</Text>
                      <Text>Showpieces</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Kitchen & Dining</Text>
                      <Text>Kitchen Storage</Text>
                      <Text>Cookware & Bakeware</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'>Beauty & Health</Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Make up</Text>
                      <Text>Face</Text>
                      <Text>Eyes</Text>
                      <Text>Lips</Text>
                      <Text>Nails</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Wellness</Text>
                      <Text>Sanitizers</Text>
                      <Text>Oral Care</Text>
                      <Text>Feminine Hygiene</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Skincare</Text>
                      <Text>Deodorants</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'>Jewellery & Accessories</Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Jewellery</Text>
                      <Text>Jewellery Set</Text>
                      <Text>Earrings</Text>
                      <Text>Mangalsutras</Text>
                      <Text>Studs</Text>
                      <Text>Bangles</Text>
                      <Text>Necklaces</Text>
                      <Text>Rings</Text>
                      <Text>Anklets</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Women Accessory</Text>
                      <Text>Bags</Text>
                      <Text>Watches</Text>
                      <Text>Hair Accessories</Text>
                      <Text>Sunglasses</Text>
                      <Text>Socks</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'>Bags & Footwear</Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)'>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Women Bags</Text>
                      <Text>All Women Bags</Text>
                      <Text>Handbags</Text>
                      <Text>Clutches</Text>
                      <Text>Slingbags</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Men Bags</Text>
                      <Text>All Men Bags</Text>
                      <Text>Men Wallets</Text>
                    </VStack>
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Men Footwear</Text>
                      <Text>Sports Shoes</Text>
                      <Text>Casual Shoes</Text>
                      <Text>Formal Shoes</Text>
                      <Text>Sandals</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Women Footwear</Text>
                      <Text>Flats</Text>
                      <Text>Bellies</Text>
                      <Text>Juttis</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
        <WrapItem >
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Button colorScheme='none' color='black' p='0' borderRadius='none' _hover={{ color: '#f43397', borderBottom: '3px solid #f43397' }} h='50px' fontSize='15px'>Electronics</Button>
            </PopoverTrigger>
              <PopoverContent w={'100%'} lineHeight='40px' m={'-8px 0 0 0'}>
                <PopoverBody p='0' lineHeight='30px' textAlign='left'fontSize={'15px'}>
                  <Grid templateColumns='repeat(6, auto)' >
                    <VStack p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Mobile & Accessories</Text>
                      <Text>All Mobile & Accessories</Text>
                      <Text>Smartwatches</Text>
                      <Text>Mobile Holders</Text>
                      <Text>Mobile cases and covers</Text>
                    </VStack>
                    <VStack bg={'#f9f9f9'} p={2} align='left'>
                      <Text as='b' color='#f43397' m='10px 0'>Appliances</Text>
                      <Text>All Appliances</Text>
                      <Text>Grooming</Text>
                      <Text>Home Appliances</Text>
                    </VStack>
                  </Grid>
                </PopoverBody>
              </PopoverContent>
          </Popover>
        </WrapItem>
      </Wrap>

    </HStack>
  </Box>
}

export default Navbar;