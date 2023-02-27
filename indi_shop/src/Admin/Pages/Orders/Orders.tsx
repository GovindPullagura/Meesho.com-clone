import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { initData, state } from "../../../constants";
import { getOrders } from "../../../Redux/Admin/action";
import AdminPagination from "../../Components/AdminPagination";
import OrderRows from "../../Components/OrdersRow";

export const Orders = () => {
  const { isLoading, isError, orders }: initData = useSelector(
    (store: state) => store.admin
  );

  const [page, setPage] = useState<number>(1);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getOrders({ page, limit: 5 }));
  }, [page]);

  const onChange = (val: number) => {
    setPage(val);
  };

  // const handleStatus = async (id, status) => {
  //   await dispatch(editOrders(id, status));
  //   dispatch(getOrders({ page, limit: 5 }));
  // };

  return (
    <Box>
      <Heading>Orders</Heading>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="pink" className="productTable">
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
                <Th>User</Th>
                <Th isNumeric>No. Of Items</Th>
                <Th isNumeric>Total Value</Th>
                <Th>Details</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders &&
                orders.map((item) => {
                  return (
                    <OrderRows
                      {...item}
                      key={item.id}
                      // handleStatus={handleStatus}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
