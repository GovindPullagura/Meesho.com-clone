import { order, product } from "../../constants";
import * as Types from "./actionTypes";

export interface initialStateType {
  isLoading: boolean;
  isError: boolean;
  products: [] | product[];
  orders: [] | order[];
}

const initialState: initialStateType = {
  isLoading: false,
  isError: false,
  products: [],
  orders: [],
};

export const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case Types.ADMIN_REQUEST:
      return { ...state, isLoading: true };

    case Types.ADMIN_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case Types.ADMIN_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case Types.ADMIN_GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload };

    case Types.ADMIN_EDIT_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case Types.ADMIN_DELETE_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case Types.ADMIN_ORDERS_SUCCESS:
      return { ...state, isLoading: false, isError: false, orders: payload };

    default:
      return state;
  }
};
