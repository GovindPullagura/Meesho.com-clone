import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initData, state } from "../../../constants";
import {
  deleteProduct,
  editProduct,
  getProducts,
} from "../../../Redux/Admin/action";
import { Dispatch } from "redux";
import Row from "../../Components/Row";
import AdminPagination from "../../Components/AdminPagination";

export const Products = () => {
  const { isLoading, isError, products }: initData = useSelector(
    (store: state) => store.admin
  );

  const toast = useToast();
  const [sort, setSort] = useState<string>("");
  const [order, setOrder] = useState<string>("");
  const [selectSort, setSelectSort] = useState<string>("-");
  const [page, setPage] = useState<number>(1);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ page, sort, order }));
  }, [page, sort, order]);

  const handleEdit = async (id: string, editValue: number) => {
    // console.log("id:", id);
    await dispatch(editProduct(id, editValue));
    dispatch(getProducts({ page, sort, order }));
    toast({
      title: "Price Added Successfully.",
      description: "Price is edited successfully",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  const onChange = (val: number) => {
    setPage(val);
  };

  const handleDelete = async (id: string) => {
    await dispatch(deleteProduct(id));
    dispatch(getProducts({ page, sort, order }));
    toast({
      title: "Deleted Successfully",
      description: "Product has successfully removed from the database.",
      status: "info",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Heading>Products</Heading>
        <Select
          variant="flushed"
          w={"200px"}
          onChange={(e) => {
            let arr = e.target.value.split("-");
            setSort(arr[0]);
            setOrder(arr[1]);
            setSelectSort(e.target.value);
          }}
        >
          <option value="-">Popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="ratings-asc">Rating: Low to High</option>
          <option value="ratings-desc">Rating: High to low</option>
        </Select>
      </Flex>
      <Box>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <TableContainer>
            <Table
              variant="striped"
              colorScheme="pink"
              className="productTable"
            >
              <TableCaption>
                <AdminPagination
                  // total={totalPages}
                  page={page}
                  onChange={onChange}
                />
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Image</Th>
                  <Th>Brand</Th>
                  <Th>Name</Th>
                  <Th>Rating</Th>
                  <Th isNumeric>Price</Th>
                  <Th>DELETE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((item) => {
                  return (
                    <Row
                      {...item}
                      key={item.id}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </Tbody>
              {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};
