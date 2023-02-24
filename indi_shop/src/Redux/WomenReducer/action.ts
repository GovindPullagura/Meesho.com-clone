import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { axiosObj, product } from "../../constants";
import { ADD_TO_CART, DATA_FAIL, DATA_REQ, DATA_SUCCESS } from "./actionTypes";

export const getReqAction = () => {
  return { type: DATA_REQ };
};

export const getReqFailAction = () => {
  return { type: DATA_FAIL };
};

export const getReqSuccessAction = (payload: product[]) => {
  return { type: DATA_SUCCESS, payload };
};

export const addToCartAction = () => {
  return { type: ADD_TO_CART };
};

// export const getWomenData = async () => {
//   let res: AxiosResponse<product[]> = await axios.get(
//     `https://indishop.onrender.com/women`
//   );
//   return res.data;
// };
export const getWomenData = (params: axiosObj) => (dispatch: Dispatch<any>) => {
  console.log(params);
  dispatch(getReqAction());
  axios
    .get(`https://indishop.onrender.com/women`, params)
    .then((res: AxiosResponse<product[]>) => {
      console.log(res.data);
      dispatch(getReqSuccessAction(res.data));
    })
    .catch((err) => dispatch(getReqFailAction()));
};

export const getMenData = (params: axiosObj) => (dispatch: Dispatch<any>) => {
  dispatch(getReqAction());
  axios
    .get(`https://indishop.onrender.com/men`, params)
    .then((res: AxiosResponse<product[]>) =>
      dispatch(getReqSuccessAction(res.data))
    )
    .catch((err) => dispatch(getReqFailAction()));
};

export const addToCart = (data: product) => (dispatch: Dispatch<any>) => {
  // dispatch(getReqAction());
  axios
    .post(`https://indishop.onrender.com/cart`, data)
    .then((res) => dispatch(addToCartAction()))
    .catch((err) => dispatch(getReqFailAction()));
};
