import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { axiosObj, initData, state } from "../constants";
// import { RootState } from "../Redux/store";
import { getWomenData } from "../Redux/WomenReducer/action";
import ProductCard from "../Components/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";

const WomenPage = () => {
  // getting the data from store:

  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, products }: initData = useSelector(
    (store: state) => store.womenData
  );

  // Settings to filter the data:
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initState: string[] = searchParams.getAll("colour");
  const [colour, setColour] = useState<string[]>(initState || []);

  const handleColour = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // Obj is according to axios docs:
  let obj: axiosObj = {
    params: {
      category: searchParams.getAll("colour"),
    },
  };

  useEffect(() => {
    let params = { colour };
    setSearchParams(params);
    dispatch(getWomenData);
  }, [colour]);
  // console.log(isLoading, isError, products);

  return (
    <Box>
      <Flex>
        <Stack p="20px" w="10%" direction={"column"}>
          <Box>
            <Heading fontSize={"20px"}>Filters</Heading>
            <Box textAlign={"left"}>
              <Heading fontSize={"15px"}>Colour</Heading>
              <Checkbox
                value={"white"}
                isChecked={colour.includes("white")}
                onChange={handleColour}
              >
                White
              </Checkbox>
              <Checkbox
                value={"pink"}
                isChecked={colour.includes("pink")}
                onChange={handleColour}
              >
                Pink
              </Checkbox>
              <Checkbox
                value={"black"}
                isChecked={colour.includes("black")}
                onChange={handleColour}
              >
                Black
              </Checkbox>
              <Checkbox
                value={"blue"}
                isChecked={colour.includes("blue")}
                onChange={handleColour}
              >
                Blue
              </Checkbox>
              <Checkbox
                value={"beige"}
                isChecked={colour.includes("beige")}
                onChange={handleColour}
              >
                Beige
              </Checkbox>
              <Checkbox
                value={"green"}
                isChecked={colour.includes("green")}
                onChange={handleColour}
              >
                Green
              </Checkbox>
              <Checkbox
                value={"grey"}
                isChecked={colour.includes("grey")}
                onChange={handleColour}
              >
                Grey
              </Checkbox>
              <Checkbox
                value={"red"}
                isChecked={colour.includes("red")}
                onChange={handleColour}
              >
                Red
              </Checkbox>
            </Box>
          </Box>
        </Stack>
        <Spacer />
        <Grid templateColumns="repeat(4, 1fr)" w="80%" gap={4}>
          {isLoading ? (
            <Heading>Loading...</Heading>
          ) : isError ? (
            <Heading>Something went wrong...</Heading>
          ) : (
            products.map((el) => (
              <GridItem key={el.id}>
                <ProductCard {...el} />
              </GridItem>
            ))
          )}
        </Grid>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default WomenPage;
