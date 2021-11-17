import { configureStore } from "@reduxjs/toolkit";
import reducers from "../features";
import thunk from "redux-thunk";

export default function configureAppStore() {
  const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
  });

  return store;
}
