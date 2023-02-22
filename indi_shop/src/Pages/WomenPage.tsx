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
import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initData, state } from "../constants";
// import { RootState } from "../Redux/store";
import { getWomenData } from "../Redux/WomenReducer/action";

const WomenPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, products }: initData = useSelector(
    (store: state) => store.womenData
  );
  useEffect(() => {
    dispatch(getWomenData);
  }, []);
  console.log(isLoading, isError, products);

  return (
    <Box>
      <Flex>
        <Stack p="20px" w="10%" direction={"column"}>
          <Box>
            <Heading>Filters</Heading>
            <Box textAlign={"left"}>
              <Heading fontSize={"30px"}>Colour</Heading>
              <Checkbox>White</Checkbox>
              <Checkbox>Pink</Checkbox>
              <Checkbox>Black</Checkbox>
              <Checkbox>Blue</Checkbox>
              <Checkbox>Beige</Checkbox>
              <Checkbox>Green</Checkbox>
              <Checkbox>Grey</Checkbox>
              <Checkbox>Red</Checkbox>
            </Box>
          </Box>
        </Stack>
        <Spacer />
        <Grid templateColumns="repeat(5, 1fr)" w="80%" gap={4}>
          <GridItem></GridItem>
        </Grid>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default WomenPage;
