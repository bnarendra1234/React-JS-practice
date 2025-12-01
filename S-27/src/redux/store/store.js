import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import productReducer from "../reducer/productReducer";

var mystore = legacy_createStore(productReducer, applyMiddleware(logger));

export default mystore;
