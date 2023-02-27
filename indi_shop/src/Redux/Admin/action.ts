import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { order, product } from "../../constants";
import * as types from "./actionTypes";

const BASE_URL = "https://indishop.onrender.com";

export interface editProductType {
  id: string;
  price: number;
}

interface getProductsType {
  page: number;
  sort: string;
  order: string;
}

interface getOrdersType {
  page: number;
  limit: number;
  // user: string;
}

//get the Product data
export const getProducts =
  ({ page = 1, sort, order }: getProductsType) =>
  (dispatch: Dispatch<any>) => {
    dispatch({ type: types.ADMIN_REQUEST });

    return axios
      .get(`${BASE_URL}/products`, {
        params: {
          _page: page,
          _sort: sort,
          _order: order,
        },
      })
      .then((res: AxiosResponse<product[]>) => {
        dispatch({ type: types.ADMIN_GET_PRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.ADMIN_FAILURE });
      });
  };

//Delete Product by Admin using ID
export const deleteProduct = (id: string) => (dispatch: Dispatch<any>) => {
  dispatch({ type: types.ADMIN_REQUEST });

  return axios
    .delete(`${BASE_URL}/products/${id}`)
    .then((res: AxiosResponse<product>) => {
      dispatch({ type: types.ADMIN_DELETE_PRODUCTS_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.ADMIN_FAILURE });
    });
};

//Edit the price of the Product
export const editProduct =
  (id: string, price: number) => (dispatch: Dispatch<any>) => {
    dispatch({ type: types.ADMIN_REQUEST });

    return axios
      .patch(`${BASE_URL}/products/${id}`, {
        price: +price,
      })
      .then((res: AxiosResponse<product>) => {
        console.log(res);
        dispatch({ type: types.ADMIN_EDIT_PRODUCTS_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.ADMIN_FAILURE });
      });
  };

//get all the orders on Admin
export const getOrders =
  ({ page = 1, limit = 5 }: getOrdersType) =>
  (dispatch: Dispatch<any>) => {
    dispatch({ type: types.ADMIN_REQUEST });

    return axios
      .get(`${BASE_URL}/orders`, {
        params: {
          _page: page,
          _limit: limit,
          _sort: "id",
          _order: "desc",
        },
      })
      .then((res: AxiosResponse<order[]>) => {
        dispatch({ type: types.ADMIN_ORDERS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.ADMIN_FAILURE });
      });
  };
