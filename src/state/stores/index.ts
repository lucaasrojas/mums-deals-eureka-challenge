import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import Reducer from "../reducers";

const store = configureStore({ reducer: Reducer });

export default store;
