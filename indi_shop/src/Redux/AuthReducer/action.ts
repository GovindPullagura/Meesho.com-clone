import axios from "axios";
import { Dispatch } from "react";
import * as types from "./actionTypes";

const login = () => (dispatch:Dispatch<any>) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .get("https://indishop.onrender.com/users")
    .then((r) => {
      localStorage.setItem("isAuth",JSON.stringify(true));
      dispatch({ type: types.LOGIN_SUCCESS});
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export { login };