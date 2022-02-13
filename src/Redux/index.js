import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";

const store = configureStore({
  reducer: auth,
  devTools: true,
});

export default store;