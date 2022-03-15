import { combineReducers } from "redux";
import { productReducer } from './product'
import { editReducer } from "../reducer/edit";
import authReducer from "./authReducer"


export const rootReducer = combineReducers({productReducer, editReducer,authReducer})