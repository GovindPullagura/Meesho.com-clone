import { initData, ReducerAction } from "../../constants";
import { ADD_TO_CART, DATA_FAIL, DATA_REQ, DATA_SUCCESS, GET_CART_DATA } from "./actionTypes";

const womenData: initData = {
  isLoading: false,
  isError: false,
  products: [],
  cart: [],
};

export const reducer = (
  state = womenData,
  { type, payload }: ReducerAction
) => {
  switch (type) {
    case DATA_FAIL:
      return { ...state, isError: true, isLoading: false };
    case DATA_REQ:
      return { ...state, isLoading: true };
    case DATA_SUCCESS:
      return { ...state, products: payload, isLoading: false };

    case ADD_TO_CART:
      return { ...state, isLoading: false };
    case GET_CART_DATA:
      return { ...state, cart: payload , isLoading: false};
    default:
      return state;
  }
};
