import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../reducers";

const store = configureStore({ reducer: Reducer });

export default store;
