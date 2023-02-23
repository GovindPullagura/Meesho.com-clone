import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { axiosObj, effectParams, initData, product, state } from "../constants";
// import { RootState } from "../Redux/store";
import { addToCart, getWomenData } from "../Redux/WomenReducer/action";
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

  const initSize: string[] = searchParams.getAll("size");
  const [size, setSize] = useState<string[]>(initState || []);

  const initBrand: string[] = searchParams.getAll("brand");
  const [brand, setBrand] = useState<string[]>(initBrand || []);

  const initCategory: string[] = searchParams.getAll("category");
  const [category, setCategory] = useState<string[]>(initCategory || []);

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
    },
  };

  useEffect(() => {
    let params: effectParams = { colour, category, size, brand };
    order && (params.order = order);
    setSearchParams(params);
    dispatch(getWomenData(obj));
  }, [colour, order, category, size, brand, location.search]);

  const handleAdd = (data: product) => {
    dispatch(addToCart(data));
  };

  return (
    <Box>
      <Flex>
        <Stack
          p="10px"
          w={{ base: "50%", md: "30%", lg: "10%" }}
          direction={"column"}
        >
          <Box mt="100px">
            <Heading fontSize={"15px"}>Sort by price:</Heading>
            <RadioGroup defaultValue={order}>
              <Flex direction="column">
                <Radio onChange={handlePrice} value="desc">
                  High to Low
                </Radio>
                <Radio onChange={handlePrice} value="asc">
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
                  isChecked={colour.includes("White")}
                  onChange={handlecolour}
                >
                  White
                </Checkbox>
                <Checkbox
                  value={"Pink"}
                  isChecked={colour.includes("Pink")}
                  onChange={handlecolour}
                >
                  Pink
                </Checkbox>
                <Checkbox
                  value={"Black"}
                  isChecked={colour.includes("Black")}
                  onChange={handlecolour}
                >
                  Black
                </Checkbox>
                <Checkbox
                  value={"Blue"}
                  isChecked={colour.includes("Blue")}
                  onChange={handlecolour}
                >
                  Blue
                </Checkbox>
                <Checkbox
                  value={"Beige"}
                  isChecked={colour.includes("Beige")}
                  onChange={handlecolour}
                >
                  Beige
                </Checkbox>
                <Checkbox
                  value={"Green"}
                  isChecked={colour.includes("Green")}
                  onChange={handlecolour}
                >
                  Green
                </Checkbox>
                <Checkbox
                  value={"Grey"}
                  isChecked={colour.includes("Grey")}
                  onChange={handlecolour}
                >
                  Grey
                </Checkbox>
                <Checkbox
                  value={"Red"}
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
                isChecked={category.includes("T-shirt")}
                onChange={handleCategory}
              >
                T-Shirt
              </Checkbox>
              <Checkbox
                value={"Kurti"}
                isChecked={category.includes("Kurti")}
                onChange={handleCategory}
              >
                Kurti
              </Checkbox>
              <Checkbox
                value={"Saree"}
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
                isChecked={size.includes("Regular")}
                onChange={handleSize}
              >
                Regular
              </Checkbox>
              <Checkbox
                value={"S"}
                isChecked={size.includes("S")}
                onChange={handleSize}
              >
                Small (S)
              </Checkbox>
              <Checkbox
                value={"M"}
                isChecked={size.includes("M")}
                onChange={handleSize}
              >
                Mediun (M)
              </Checkbox>
              <Checkbox
                value={"L"}
                isChecked={size.includes("L")}
                onChange={handleSize}
              >
                Large (L)
              </Checkbox>
              <Checkbox
                value={"XL"}
                isChecked={size.includes("XL")}
                onChange={handleSize}
              >
                XL
              </Checkbox>
              <Checkbox
                value={"XXL"}
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
                isChecked={brand.includes("Nike")}
                onChange={handleBrand}
              >
                Nike
              </Checkbox>
              <Checkbox
                value={"Roadster"}
                isChecked={brand.includes("Roadster")}
                onChange={handleBrand}
              >
                Roadster
              </Checkbox>
              <Checkbox
                value={"Lee"}
                isChecked={brand.includes("Lee")}
                onChange={handleBrand}
              >
                Lee
              </Checkbox>
              <Checkbox
                value={"UCB"}
                isChecked={brand.includes("UCB")}
                onChange={handleBrand}
              >
                UCB
              </Checkbox>
              <Checkbox
                value={"HRX"}
                isChecked={brand.includes("HRX")}
                onChange={handleBrand}
              >
                HRX
              </Checkbox>
              <Checkbox
                value={"Louis Philippe"}
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
  );
};

export default WomenPage;
