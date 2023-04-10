import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Divider,
  Flex,
  HStack,
  StackDivider,
  Text,
  VStack,
  Stack,
  Heading,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import { Checkbox, Radio, RadioGroup } from "@chakra-ui/react";
import React, { Dispatch, useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { axiosObj, effectParams, initData, product, state } from "../constants";
import { getAllProductData, addToCart } from "../Redux/HomeReducer/action";

const Home = () => {
  // getting the data from store:

  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, products }: initData = useSelector(
    (store: state) => store.allProductData
  );
  // @ts-ignore
  // const searchQuery= (JSON.parse(localStorage.getItem("search"))||[])

  // Settings to filter the data:
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initColor: string[] = searchParams.getAll("colour");
  const [colour, setColour] = useState<string[]>(initColor || []);

  const initSize: string[] = searchParams.getAll("size");
  const [size, setSize] = useState<string[]>(initSize || []);

  const initBrand: string[] = searchParams.getAll("brand");
  const [brand, setBrand] = useState<string[]>(initBrand || []);

  const initCategory: string[] = searchParams.getAll("category");
  const [category, setCategory] = useState<string[]>(initCategory || []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    let categories: string[] = [...category];
    let value = e.target.value;
    if (categories.includes(value)) {
      categories.splice(categories.indexOf(value), 1);
    } else {
      categories.push(value);
    }
    setCategory(categories);
  };

  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    let brands: string[] = [...brand];
    let value = e.target.value;
    if (brands.includes(value)) {
      brands.splice(brands.indexOf(value), 1);
    } else {
      brands.push(value);
    }
    setBrand(brands);
  };

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sizes: string[] = [...size];
    let value = e.target.value;
    if (sizes.includes(value)) {
      sizes.splice(sizes.indexOf(value), 1);
    } else {
      sizes.push(value);
    }
    setSize(sizes);
  };

  const handlecolour = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let colours: string[] = [...colour];
    let value = e.target.value;
    if (colours.includes(value)) {
      colours.splice(colours.indexOf(value), 1);
    } else {
      colours.push(value);
    }
    setColour(colours);
  };

  // Sort by price:
  const initPriceOrder: string | null = searchParams.get("order");
  const [order, setOrder] = useState<string>(initPriceOrder || "");

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
  };

  // Obj is according to axios docs:
  let obj: axiosObj = {
    params: {
      colour: searchParams.getAll("colour"),
      category: searchParams.getAll("category"),
      size: searchParams.getAll("size"),
      brand: searchParams.getAll("brand"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: currentPage,
      _limit: itemsPerPage,
    },
  };

  useEffect(() => {
    let params: any = { colour, category, size, brand };
    order && (params.order = order);
    setSearchParams(params);
    // @ts-ignore
    dispatch(getAllProductData(obj));
  }, [colour, order, category, size, brand, location.search]);

  const handleAdd = (data: product) => {
    dispatch(addToCart(data));
  };

  return (
    <div>
      <Navbar />
      <HStack textAlign={"left"} w="60%" m="auto" mt="50px">
        <Box
          bg="#f9f9f9"
          h={{
            base: "auto",
            sx: "auto",
            md: "300px",
            lg: "400px",
          }}
          w="70%"
          p="30px 50px"
        >
          <Text
            as="b"
            fontSize={{
              base: "15px",
              md: "30px",
              lg: "45px",
            }}
            lineHeight={{
              base: "20px",
              md: "40px",
              lg: "60px",
            }}
          >
            Lowest Prices Best Quality Shopping
          </Text>
          <HStack
            divider={<StackDivider borderColor="black" />}
            bg="white"
            marginTop={"30px"}
            p="3"
            borderRadius={"10px"}
            w="310px"
            padding="10px"
          >
            <HStack>
              <Image
                src="https://images.meesho.com/images/pow/freeDelivery.svg"
                borderRadius={"50%"}
                bg="#f0a9c8"
                w={"35px"}
                h="35px"
              />
              <Text as="b" fontSize="13px">
                Free
                <br />
                Delivery
              </Text>
            </HStack>
            <HStack>
              <Image
                src="https://images.meesho.com/images/pow/cod.svg"
                borderRadius={"50%"}
                bg="#f0a9c8"
                w={"35px"}
                h="35px"
              />
              <Text as="b" fontSize="13px">
                Cash on
                <br />
                Delivery
              </Text>
            </HStack>
            <HStack>
              <Image
                src="https://images.meesho.com/images/pow/easyReturns.svg"
                borderRadius={"50%"}
                bg="#f0a9c8"
                w={"35px"}
                h="35px"
              />
              <Text as="b" fontSize="13px">
                Easy
                <br />
                Returns
              </Text>
            </HStack>
          </HStack>
          <Button
            colorScheme={"none"}
            color="white"
            bg="#f43397"
            w="310px"
            h="40px"
            fontSize={"18px"}
            mt={"30px"}
          >
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII="
              bg="#f43397"
              marginRight={"20px"}
              w="25px"
            />
            Download the Meesho App
          </Button>
        </Box>
        <Box>
          <Image
            src="https://images.meesho.com/images/marketing/1631722939962.webp"
            w={"100%"}
            ml="-8px"
          />
        </Box>
      </HStack>
      <HStack w="60%" m="auto" mt="60px">
        <Divider borderColor={"#f43397"} w="25%" />
        <Text as="b" fontSize={"4xl"}>
          Top Categories to choose from
        </Text>
        <Divider borderColor={"#f43397"} w="25%" />
      </HStack>
      <Box w="60%" m="auto" mt="60px" h="450px">
        <Image
          src="https://images.meesho.com/images/marketing/1649759774600.jpg"
          h="100%"
          w="100%"
          borderRadius={"10px"}
        />
        <HStack p={"0 0 500% 0"} marginTop="-300 ">
          <Button colorScheme={"none"}>
            <Link to="/womenPage">
              <Image src="https://images.meesho.com/images/marketing/1649760442043.webp" />
            </Link>
          </Button>
          <Button colorScheme={"none"} pt="20%">
            <Link to="/menPage">
              <Image src="https://images.meesho.com/images/marketing/1649760423313.webp" />
            </Link>
          </Button>
          <Button colorScheme={"none"} pt="20%">
            <Link to="/girlsPage">
              <Image src="https://images.meesho.com/images/marketing/1649759799809.webp" />
            </Link>
          </Button>
        </HStack>
      </Box>
      <Box w="60%" m="auto" mt="60px" h="450px" borderRadius={"10px"}>
        <Image
          src="https://images.meesho.com/images/marketing/1664343269674.jpg"
          h="100%"
          w="100%"
          borderRadius={"10px"}
        />
        <Box h="100%" w="100%" mt="-250" ml="30px">
          <HStack p="0 0 0 0">
            <Button colorScheme={"none"} w="30%">
              <Image src="https://images.meesho.com/images/marketing/1664368165450.webp" />
            </Button>
            <Button colorScheme={"none"} w="20%">
              <VStack>
                <Image src="https://images.meesho.com/images/marketing/1649760808952.webp" />
                <Image src="https://images.meesho.com/images/marketing/1664364866805.webp" />
              </VStack>
            </Button>
            <Button colorScheme={"none"} w="20%">
              <VStack>
                <Image src="https://images.meesho.com/images/marketing/1649760703179.webp" />
                <Image src="https://images.meesho.com/images/marketing/1664364917657.webp" />
              </VStack>
            </Button>
            <Button colorScheme={"none"} w="20%">
              <VStack>
                <Image src="https://images.meesho.com/images/marketing/1649760786763.webp" />
                <Image src="https://images.meesho.com/images/marketing/1664364898513.webp" />
              </VStack>
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box w="60%" m="auto" mt="60px" h="400px" borderRadius={"10px"}>
        <Image
          src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp"
          h="100%"
          w="100%"
          borderRadius={"10px"}
        />
        <Box h="100%" w="100%" mt="-350" textAlign="right">
          <VStack p="0 20px 0 150px">
            <Text fontSize={"30px"} color="#5585f8" as="b" p="0 0 0 230px">
              Become a Reseller and
            </Text>
            <Text fontSize={"45px"} color="#f43397" as="b">
              Start your Online Business
              <br />
              with Zero Investment
            </Text>
            <br />
            <HStack p="0 0 0 200px">
              <Button colorScheme={"none"} bg="black" p="25px">
                <Image
                  src="https://images.meesho.com/images/pow/playstoreIcon.webp"
                  w="130px"
                />
              </Button>
              <Button colorScheme={"none"} bg="black" p="25px">
                <Image
                  src="https://images.meesho.com/images/pow/appstoreIcon.webp"
                  w="130px"
                />
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Box w="60%" m="auto" mt="60px" h="210px" borderRadius={"10px"}>
        <Image
          src="https://images.meesho.com/images/pow/supplyBannerDesktop.webp"
          h="100%"
          w="100%"
          borderRadius={"10px"}
        />
        <Box h="100%" w="100%" mt="-170" textAlign="left" ml="40px">
          <Text color={"white"} as="b" fontSize={"35px"}>
            Register as a Meesho Supplier
          </Text>
          <br />
          <br />
          <Text color={"white"}>
            Sell your products to crores of customers at 0% commission
          </Text>
          <br />
          <HStack divider={<StackDivider borderColor="white" />}>
            <HStack>
              <BsCheckCircleFill color="green" />
              <Text color={"white"} as="b">
                Grow your business 10x
              </Text>
            </HStack>
            <HStack>
              <BsCheckCircleFill color="green" />
              <Text color={"white"} as="b">
                Enjoy 100% Profit
              </Text>
            </HStack>
            <HStack>
              <BsCheckCircleFill color="green" />
              <Text color={"white"} as="b">
                Sell all over India
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <Box w="80%" m="auto" mt="60px">
        <Box textAlign="left">
          <Text as={"b"} textAlign="left" fontSize="35px">
            Products For You
          </Text>
        </Box>
        <br />
        <br />
        <Flex>
          <Stack
            p="10px"
            w={{ base: "50%", md: "30%", lg: "20%" }}
            direction={"column"}
          >
            <Box>
              <Heading fontSize={"15px"}>Sort by price:</Heading>
              <RadioGroup defaultValue={order}>
                <Flex direction="column">
                  <Radio onChange={handlePrice} colorScheme="pink" value="desc">
                    High to Low
                  </Radio>
                  <Radio onChange={handlePrice} colorScheme="pink" value="asc">
                    Low to High
                  </Radio>
                </Flex>
              </RadioGroup>
            </Box>
            <Box>
              <Heading fontSize={"20px"}>Filters</Heading>
              <Box textAlign={"left"}>
                <Heading fontSize={"15px"}>Colour</Heading>
                <Flex direction={"column"}>
                  <Checkbox
                    value={"White"}
                    colorScheme="pink"
                    isChecked={colour.includes("White")}
                    onChange={handlecolour}
                  >
                    White
                  </Checkbox>
                  <Checkbox
                    value={"Pink"}
                    colorScheme="pink"
                    isChecked={colour.includes("Pink")}
                    onChange={handlecolour}
                  >
                    Pink
                  </Checkbox>
                  <Checkbox
                    value={"Black"}
                    colorScheme="pink"
                    isChecked={colour.includes("Black")}
                    onChange={handlecolour}
                  >
                    Black
                  </Checkbox>
                  <Checkbox
                    value={"Blue"}
                    colorScheme="pink"
                    isChecked={colour.includes("Blue")}
                    onChange={handlecolour}
                  >
                    Blue
                  </Checkbox>
                  <Checkbox
                    value={"Beige"}
                    colorScheme="pink"
                    isChecked={colour.includes("Beige")}
                    onChange={handlecolour}
                  >
                    Beige
                  </Checkbox>
                  <Checkbox
                    value={"Green"}
                    colorScheme="pink"
                    isChecked={colour.includes("Green")}
                    onChange={handlecolour}
                  >
                    Green
                  </Checkbox>
                  <Checkbox
                    value={"Grey"}
                    colorScheme="pink"
                    isChecked={colour.includes("Grey")}
                    onChange={handlecolour}
                  >
                    Grey
                  </Checkbox>
                  <Checkbox
                    value={"Red"}
                    colorScheme="pink"
                    isChecked={colour.includes("Red")}
                    onChange={handlecolour}
                  >
                    Red
                  </Checkbox>
                </Flex>
              </Box>
            </Box>
            <Box textAlign={"left"}>
              <Heading fontSize={"15px"}>Categories</Heading>
              <Flex direction={"column"}>
                <Checkbox
                  value={"T-shirt"}
                  colorScheme="pink"
                  isChecked={category.includes("T-shirt")}
                  onChange={handleCategory}
                >
                  T-Shirt
                </Checkbox>
                <Checkbox
                  value={"Kurti"}
                  colorScheme="pink"
                  isChecked={category.includes("Kurti")}
                  onChange={handleCategory}
                >
                  Kurti
                </Checkbox>
                <Checkbox
                  value={"Saree"}
                  colorScheme="pink"
                  isChecked={category.includes("Saree")}
                  onChange={handleCategory}
                >
                  Saree
                </Checkbox>
              </Flex>
            </Box>
            <Box textAlign={"left"}>
              <Heading fontSize={"15px"}>Size</Heading>
              <Flex direction={"column"}>
                <Checkbox
                  value={"Regular"}
                  colorScheme="pink"
                  isChecked={size.includes("Regular")}
                  onChange={handleSize}
                >
                  Regular
                </Checkbox>
                <Checkbox
                  value={"S"}
                  colorScheme="pink"
                  isChecked={size.includes("S")}
                  onChange={handleSize}
                >
                  Small (S)
                </Checkbox>
                <Checkbox
                  value={"M"}
                  colorScheme="pink"
                  isChecked={size.includes("M")}
                  onChange={handleSize}
                >
                  Mediun (M)
                </Checkbox>
                <Checkbox
                  value={"L"}
                  colorScheme="pink"
                  isChecked={size.includes("L")}
                  onChange={handleSize}
                >
                  Large (L)
                </Checkbox>
                <Checkbox
                  value={"XL"}
                  colorScheme="pink"
                  isChecked={size.includes("XL")}
                  onChange={handleSize}
                >
                  XL
                </Checkbox>
                <Checkbox
                  value={"XXL"}
                  colorScheme="pink"
                  isChecked={size.includes("XXL")}
                  onChange={handleSize}
                >
                  XXL
                </Checkbox>
              </Flex>
            </Box>
            <Box textAlign={"left"}>
              <Heading fontSize={"15px"}>Brands</Heading>
              <Flex direction={"column"}>
                <Checkbox
                  value={"Nike"}
                  colorScheme="pink"
                  isChecked={brand.includes("Nike")}
                  onChange={handleBrand}
                >
                  Nike
                </Checkbox>
                <Checkbox
                  value={"Roadster"}
                  colorScheme="pink"
                  isChecked={brand.includes("Roadster")}
                  onChange={handleBrand}
                >
                  Roadster
                </Checkbox>
                <Checkbox
                  value={"Lee"}
                  colorScheme="pink"
                  isChecked={brand.includes("Lee")}
                  onChange={handleBrand}
                >
                  Lee
                </Checkbox>
                <Checkbox
                  value={"UCB"}
                  colorScheme="pink"
                  isChecked={brand.includes("UCB")}
                  onChange={handleBrand}
                >
                  UCB
                </Checkbox>
                <Checkbox
                  value={"HRX"}
                  colorScheme="pink"
                  isChecked={brand.includes("HRX")}
                  onChange={handleBrand}
                >
                  HRX
                </Checkbox>
                <Checkbox
                  value={"Louis Philippe"}
                  colorScheme="pink"
                  isChecked={brand.includes("Louis Philippe")}
                  onChange={handleBrand}
                >
                  Louis Philippe
                </Checkbox>
              </Flex>
            </Box>
          </Stack>
          <Spacer />
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4, 1fr)",
            }}
            w="80%"
            gap={4}
          >
            {isLoading ? (
              <Heading>Loading...</Heading>
            ) : isError ? (
              <Heading>Something went wrong...</Heading>
            ) : (
              products.map((el) => (
                <GridItem key={el.id}>
                  <ProductCard {...el} handleAdd={() => handleAdd(el)} />
                </GridItem>
              ))
            )}
          </Grid>
          <Spacer />
        </Flex>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
