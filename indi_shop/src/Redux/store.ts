import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as womenReducer } from "../Redux/WomenReducer/reducer";
import { reducer as homeReducer } from "./HomeReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ womenData: womenReducer, allProductData:homeReducer, authReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export type RootState = ReturnType<typeof store.getState>;
