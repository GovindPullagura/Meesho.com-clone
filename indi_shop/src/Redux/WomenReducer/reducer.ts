import { initData, ReducerAction } from "../../constants";
import { DATA_FAIL, DATA_REQ, DATA_SUCCESS } from "../actionTypes";

const womenData: initData = { isLoading: false, isError: false, products: [] };

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
    default:
      return state;
  }
};
