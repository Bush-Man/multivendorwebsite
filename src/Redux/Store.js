import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Features/CartSlice.js";
import userReducer from "./Features/AuthSlice.js";
import { displayProductSlice } from "./Features/ProductSlice.js";
import CheckoutSlice from "./Features/CheckoutSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer ,products: displayProductSlice.reducer ,checkout:CheckoutSlice});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);