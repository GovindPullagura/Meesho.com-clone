import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { axiosObj, product } from "../../constants";
import { DATA_FAIL, DATA_REQ, DATA_SUCCESS } from "./actionTypes";

export const getReqAction = () => {
  return { type: DATA_REQ };
};

export const getReqFailAction = () => {
  return { type: DATA_FAIL };
};

export const getReqSuccessAction = (payload: product[]) => {
  return { type: DATA_SUCCESS, payload };
};

// export const getWomenData = async () => {
//   let res: AxiosResponse<product[]> = await axios.get(
//     `https://indishop.onrender.com/women`
//   );
//   return res.data;
// };
export const getWomenData = (dispatch: Dispatch<any>) => {
  dispatch(getReqAction());
  axios
    .get(`https://indishop.onrender.com/women`)
    .then((res: AxiosResponse<product[]>) => {
      // console.log(res.data);
      dispatch(getReqSuccessAction(res.data));
    })
    .catch((err) => dispatch(getReqFailAction()));
};

export const getMenData = (dispatch: Dispatch<any>) => {
  dispatch(getReqAction());
  axios
    .get(`https://indishop.onrender.com/men`)
    .then((res: AxiosResponse<product[]>) =>
      dispatch(getReqSuccessAction(res.data))
    )
    .catch((err) => dispatch(getReqFailAction()));
};
