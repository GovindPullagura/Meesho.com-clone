import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Input,
  HStack,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  VStack,
  StackDivider,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverBody,
  Wrap,
  WrapItem,
  Grid,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { BsCart, BsApple, BsPersonCircle } from "react-icons/bs";
import { SlBag } from "react-icons/sl";

const Navbar = () => {
  return (
    <Box position={"sticky"} top={"0%"} bg={"white"}>
      <HStack
        height="90px"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        spacing={"10"}
        textAlign="center"
        justifyContent="center"
      >
        <Link to={"/"}>
          <Image src="./Indishop_logo.png" alt="logo" width="150px" />
        </Link>
        <InputGroup width="500px">
          <Input
            type="text"
            placeholder="Try Saree, Kurti"
            id="search"
            h="50px"
          />
          <InputLeftElement>
            <CiSearch size={"40px"} color="#707070" />
          </InputLeftElement>
        </InputGroup>
        <HStack divider={<StackDivider borderColor="gray.200" />}>
          <Popover trigger={"hover"}>
            <PopoverTrigger>
              <Button
                colorScheme="none"
                color="black"
                borderRadius="none"
                _hover={{ color: "#f43397", borderBottom: "3px solid #f43397" }}
                h="90px"
                fontSize="18px"
              >
                <TfiMobile />
                Download App
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent p={4} w="255px" m={"-8px 0 0 0"}>
                <PopoverBody>
                  <Text fontSize="20px">Download From a</Text>
                  <Button
                    colorScheme="none"
                    bg="black"
                    color="white"
                    w="200px"
                    h="50px"
                    m={"25px 0"}
                  >
                    <Image
                      src="data:image/png;base64,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"
                      w="60px"
                    />
                    <VStack lineHeight="7px">
                      <Text fontSize="10px" m={"0 60px 0 0"}>
                        GET IT ON
                      </Text>
                      <Text fontSize="20px">Google Play</Text>
                    </VStack>
                  </Button>
                  <Button
                    colorScheme="none"
                    bg="black"
                    color="white"
                    w="200px"
                    h="50px"
                  >
                    <BsApple color="white" size={25} />
                    <VStack lineHeight="7px">
                      <Text fontSize="10px" m={"0 15px 0 0"}>
                        Available on the
                      </Text>
                      <Text fontSize="20px">App Store</Text>
                    </VStack>
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>

          <Button colorScheme="none" color="black" fontSize="18px">
            Become a Supplier
          </Button>

          <Popover trigger={"hover"}>
            <PopoverTrigger>
              <Button
                colorScheme="none"
                color="black"
                borderRadius="none"
                _hover={{ color: "#f43397", borderBottom: "3px solid #f43397" }}
                h="90px"
                fontSize="18px"
              >
                <IoPersonOutline />
                Profile
              </Button>
            </PopoverTrigger>
            <PopoverContent w="250px" m={"-8px 0 0 0"}>
              <PopoverBody>
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  align="left"
                >
                  <HStack>
                    <BsPersonCircle size="50px" color="#e4edff" />
                    <Box>
                      <Text as="b" fontSize="20px">
                        Hello User
                      </Text>
                      <Text>+91 xxxxxxxxxx</Text>
                    </Box>
                  </HStack>
                  <Button
                    colorScheme="none"
                    color="black"
                    m={"0 100px 0 0"}
                    p={0}
                  >
                    <SlBag />
                    <Text fontSize="20px" p="0 0 0 15px">
                      My Orders
                    </Text>
                  </Button>
                  <Button
                    colorScheme="none"
                    color="black"
                    m={"0 100px 0 0"}
                    p={0}
                  >
                    <IoLogOutOutline size="30px" />
                    <Text fontSize="20px" p="0 30px 0 9px">
                      Logout
                    </Text>
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Button colorScheme="none" color="black" fontSize="18px">
            <BsCart />
            Cart
          </Button>
        </HStack>
      </HStack>
      <HStack
        height="70px"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        textAlign="center"
        justifyContent="center"
      >
        <Wrap spacing={"5"}>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Women Ethnic
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          All Women Ethnic
                        </Text>
                        <Text>View All</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Sarees
                        </Text>
                        <Text>All Sarees</Text>
                        <Text> Silk Sarees</Text>
                        <Text>Cotton Silk Sarees</Text>
                        <Text>Cotton Sarees</Text>
                        <Text>Georgette Sarees</Text>
                        <Text>Chiffon Sarees</Text>
                        <Text>Satin Sarees</Text>
                        <Text>Embroidered Sarees</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Kurtis
                        </Text>
                        <Text>All Kurtis</Text>
                        <Text> Anarkali Kurtis</Text>
                        <Text>Rayon Kurtis</Text>
                        <Text>Cotton Kurtis</Text>
                        <Text>Embroidered Kurtis</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Kurta Sets
                        </Text>
                        <Text>All Kurta Sets</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Suits & Dress Material
                        </Text>
                        <Text>All Suits & Dress Material</Text>
                        <Text>Cotton Suits</Text>
                        <Text>Embroidered Suits</Text>
                        <Text>Chanderi Suits</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Other Ethnic
                        </Text>
                        <Text>Blouses</Text>
                        <Text>Dupattas</Text>
                        <Text>Lehanga</Text>
                        <Text>Gown</Text>
                        <Text>Ethnic Bottomwear</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Women Western
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Topwear
                        </Text>
                        <Text>Tops</Text>
                        <Text>Dresses</Text>
                        <Text>Sweaters</Text>
                        <Text>Jumpsuits</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} align="left" p={2}>
                        <Text as="b" color="#f43397" m="10px 0">
                          Bottomwear
                        </Text>
                        <Text>Jeans</Text>
                        <Text>Jeggings</Text>
                        <Text>Palazzos</Text>
                        <Text>Shorts</Text>
                        <Text>Skirts</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Innerwear
                        </Text>
                        <Text>Bra</Text>
                        <Text>Briefs</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} align="left" p={2}>
                        <Text as="b" color="#f43397" m="10px 0">
                          Sleepwear
                        </Text>
                        <Text>Nightsuits</Text>
                        <Text>Babydolls</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Men
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Top Wear
                        </Text>
                        <Text>All Top Wear</Text>
                        <Text>Tshirts</Text>
                        <Text>Shirts</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Bottom Wear
                        </Text>
                        <Text>Track Pants</Text>
                        <Text>Jeans</Text>
                        <Text>Trousers</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Men Accessories
                        </Text>
                        <Text>All Men Accessories</Text>
                        <Text>Watches</Text>
                        <Text>Belts</Text>
                        <Text>Wallets</Text>
                        <Text>Jewellery</Text>
                        <Text>Sunglasses</Text>
                        <Text>Bags</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Men Footwear
                        </Text>
                        <Text>Casual Shoes</Text>
                        <Text>Sports Shoes</Text>
                        <Text>Sandals</Text>
                        <Text>Formal Shoes</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Ethnic Wear
                        </Text>
                        <Text>Men Kurtas</Text>
                        <Text>Ethnic Jackets</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Inner & Sleep Wear
                        </Text>
                        <Text>All Inner & Sleep Wear</Text>
                        <Text>Vests</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Kids
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Boys & Girls 2+ Years
                        </Text>
                        <Text>Dresses</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Infant 0-2 Years
                        </Text>
                        <Text>Rompers</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Toys & Accessories
                        </Text>
                        <Text>Soft Toys</Text>
                        <Text>Footwear</Text>
                        <Text>Stationary</Text>
                        <Text>Watches</Text>
                        <Text>Bags & Backpacks</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Baby Care
                        </Text>
                        <Text>All Baby Care</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Home & Kitchen
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Home Furnishing
                        </Text>
                        <Text>Bedsheets</Text>
                        <Text>Doormats</Text>
                        <Text>Curtains & Sheers</Text>
                        <Text>Cushion & Cushion Covers</Text>
                        <Text>Mattress Protectors</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Home Decor
                        </Text>
                        <Text>All Home Decor</Text>
                        <Text>Stickers</Text>
                        <Text>Clocks</Text>
                        <Text>Showpieces</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Kitchen & Dining
                        </Text>
                        <Text>Kitchen Storage</Text>
                        <Text>Cookware & Bakeware</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Beauty & Health
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Make up
                        </Text>
                        <Text>Face</Text>
                        <Text>Eyes</Text>
                        <Text>Lips</Text>
                        <Text>Nails</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Wellness
                        </Text>
                        <Text>Sanitizers</Text>
                        <Text>Oral Care</Text>
                        <Text>Feminine Hygiene</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Skincare
                        </Text>
                        <Text>Deodorants</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Jewellery & Accessories
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Jewellery
                        </Text>
                        <Text>Jewellery Set</Text>
                        <Text>Earrings</Text>
                        <Text>Mangalsutras</Text>
                        <Text>Studs</Text>
                        <Text>Bangles</Text>
                        <Text>Necklaces</Text>
                        <Text>Rings</Text>
                        <Text>Anklets</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Women Accessory
                        </Text>
                        <Text>Bags</Text>
                        <Text>Watches</Text>
                        <Text>Hair Accessories</Text>
                        <Text>Sunglasses</Text>
                        <Text>Socks</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Bags & Footwear
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w={"100%"} fontSize={"xl"} m={"-8px 0 0 0"}>
                  <PopoverBody p="0" lineHeight="40px">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Women Bags
                        </Text>
                        <Text>All Women Bags</Text>
                        <Text>Handbags</Text>
                        <Text>Clutches</Text>
                        <Text>Slingbags</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Men Bags
                        </Text>
                        <Text>All Men Bags</Text>
                        <Text>Men Wallets</Text>
                      </VStack>
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Men Footwear
                        </Text>
                        <Text>Sports Shoes</Text>
                        <Text>Casual Shoes</Text>
                        <Text>Formal Shoes</Text>
                        <Text>Sandals</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Women Footwear
                        </Text>
                        <Text>Flats</Text>
                        <Text>Bellies</Text>
                        <Text>Juttis</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
          <WrapItem>
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Button
                  colorScheme="none"
                  color="black"
                  p="0"
                  borderRadius="none"
                  _hover={{
                    color: "#f43397",
                    borderBottom: "3px solid #f43397",
                  }}
                  h="70px"
                  fontSize="18px"
                >
                  Electronics
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  w={"100%"}
                  fontSize={"xl"}
                  lineHeight="40px"
                  m={"-8px 0 0 0"}
                >
                  <PopoverBody p="0">
                    <Grid templateColumns="repeat(6, auto)">
                      <VStack p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Mobile & Accessories
                        </Text>
                        <Text>All Mobile & Accessories</Text>
                        <Text>Smartwatches</Text>
                        <Text>Mobile Holders</Text>
                        <Text>Mobile cases and covers</Text>
                      </VStack>
                      <VStack bg={"#f9f9f9"} p={2} align="left">
                        <Text as="b" color="#f43397" m="10px 0">
                          Appliances
                        </Text>
                        <Text>All Appliances</Text>
                        <Text>Grooming</Text>
                        <Text>Home Appliances</Text>
                      </VStack>
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </WrapItem>
        </Wrap>
      </HStack>
    </Box>
  );
};

export default Navbar;
