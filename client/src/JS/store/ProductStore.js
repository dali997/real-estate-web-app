import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducer/index"

import thunk from "redux-thunk"

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ProductStore = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)