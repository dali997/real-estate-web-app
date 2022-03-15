import { createStore, compose , applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "../reducer/authindex";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store