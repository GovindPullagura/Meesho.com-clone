import { initData, ReducerAction } from "../../constants";
import {
  ADD_TO_CART,
  ALL_PRODUCT_FAILURE,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  GET_CART_DATA,
} from "./actionTypes";

const allProductData: initData = {
  isLoading: false,
  isError: false,
  products: [],
  cart: [],
};

export const reducer = (
  state = allProductData,
  { type, payload }: ReducerAction
) => {
  switch (type) {
    case ALL_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case ALL_PRODUCT_SUCCESS:
      return { ...state, products: payload, isLoading: false };

    case ALL_PRODUCT_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case ADD_TO_CART:
      return { ...state, isLoading: false };
    case GET_CART_DATA:
      return { ...state, cart: payload, isLoading: false };
    default:
      return state;
  }
};
