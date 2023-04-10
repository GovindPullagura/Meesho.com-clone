import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef, Dispatch } from "react";
import { ModalFooter } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { axiosObj, initData, state } from "../constants";
import { useSelector } from "react-redux";
import { getAllProductData } from "../Redux/HomeReducer/action";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, products }: initData = useSelector(
    (store: state) => store.allProductData
  );

  const navigate = useNavigate();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const getData = () => {
    let obj: axiosObj = {
      params: {
        q: search,
      },
    };
    console.log(search);
    dispatch(getAllProductData(obj));
  };

  console.log("products:", products);

  useEffect(() => {
    if (search.length) {
      onOpen();
    } else {
      onClose();
    }
    let timer = setTimeout(getData, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <InputGroup
        width={{
          base: "50px",
          md: "200px",
          lg: "400px",
        }}
      >
        <Input
          type="text"
          placeholder="Try Saree, Kurti"
          id="search"
          value={search}
          h="40px"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          ref={finalRef}
        />
        <InputLeftElement>
          <CiSearch size={"30px"} color="#707070" />
        </InputLeftElement>
      </InputGroup>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <InputGroup
              width={{
                base: "100%",
                md: "100%",
                lg: "100%",
              }}
            >
              <Input
                type="text"
                placeholder="Try Saree, Kurti"
                id="search"
                value={search}
                h="40px"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                ref={initialRef}
              />
              <InputLeftElement>
                <CiSearch size={"30px"} color="#707070" />
              </InputLeftElement>
            </InputGroup>
            <Box>
              {isLoading ? (
                <Center>
                  <Spinner m={"auto"} />
                </Center>
              ) : products.length ? (
                <Stack>
                  {products.map((item) => (
                    <div
                      onClick={() => {
                        onClose();
                        navigate(`/productDetails/${item.gender}/${item.id}`);
                      }}
                    >
                      <HStack
                        key={item.id}
                        gap={"10px"}
                        p={"10px"}
                        borderRadius={"20px"}
                        _hover={{
                          backgroundColor: "rgb(0, 0, 0, 0.2)",
                          color: "white",
                        }}
                      >
                        <Image src={item.image} maxHeight={"70px"} w={"40px"} />
                        <Flex textAlign={"left"} direction={"column"}>
                          <Heading size={"sm"} textAlign="left" m={"0"}>
                            {item.brand}
                          </Heading>
                          <Text noOfLines={2}>{item.description}</Text>
                        </Flex>
                      </HStack>
                    </div>
                  ))}
                </Stack>
              ) : (
                <Center>No Result Found!</Center>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SearchBar;
