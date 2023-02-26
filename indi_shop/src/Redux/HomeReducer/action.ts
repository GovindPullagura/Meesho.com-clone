import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { axiosObj, product } from "../../constants";
import {
  ADD_TO_CART,
  ALL_PRODUCT_FAILURE,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  GET_CART_DATA,
} from "./actionTypes";

export const getAllProductRequest = () => {
  return { type: ALL_PRODUCT_REQUEST };
};

export const getAllProductSuccess = (payload: product[]) => {
  return { type: ALL_PRODUCT_SUCCESS, payload };
};

export const getAllProductFailure = () => {
  return { type: ALL_PRODUCT_FAILURE };
};

export const addToCartAction = () => {
  return { type: ADD_TO_CART };
};
export const getCartDataSuccess = (payload: product[]) => {
  return { type: GET_CART_DATA, payload };
};

export const getAllProductData =
  (params: axiosObj) => (dispatch: Dispatch<any>) => {
    // console.log(params);
    dispatch(getAllProductRequest());
    axios
      .get(`https://indishop.onrender.com/products`, params)
      .then((res: AxiosResponse<product[]>) => {
        // console.log(res.data);
        dispatch(getAllProductSuccess(res.data));
      })
      .catch((err) => dispatch(getAllProductFailure()));
  };

export const addToCart = (data: product) => (dispatch: Dispatch<any>) => {
  // dispatch(getAllProductRequest());
  axios
    .post(`https://indishop.onrender.com/cart`, data)
    .then((res) => dispatch(addToCartAction()))
    .catch((err) => dispatch(getAllProductFailure()));
};
export const getcartData = (dispatch: Dispatch<any>) => {
  axios
    .get(`https://indishop.onrender.com/cart`)
    .then((res: AxiosResponse<product[]>) => {
      dispatch(getCartDataSuccess(res.data));
    });
};
