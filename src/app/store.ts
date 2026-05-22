// store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import loginReducer from "../features/login/login.slice";

const customSessionStorage = {
  getItem: (key: string) => {
    return Promise.resolve(sessionStorage.getItem(key));
  },
  setItem: (key: string, value: string) => {
    sessionStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    sessionStorage.removeItem(key);
    return Promise.resolve();
  },
};

const rootReducer = combineReducers({
  login: loginReducer,
});

const persistConfig = {
  key: "root",
  storage: customSessionStorage, 
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;