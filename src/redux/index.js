import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import { reducers } from "./slice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["home"],
};


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [reduxThunk],
});

export const persistor = persistStore(store);
