import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(employeeReducer,composeWithDevTools(applyMiddleware(thunk)) );

export default store;