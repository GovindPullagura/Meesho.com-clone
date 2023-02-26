import * as types from "./actionTypes";

const initialState={
  // @ts-ignore
  isAuth:(JSON.parse(localStorage.getItem("isAuth"))||false),
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action:any) => {
  const { type } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true  };

    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

   default:
      return state;
  }
};

export { reducer };
