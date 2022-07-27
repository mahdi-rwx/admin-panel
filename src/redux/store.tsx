import { configureStore } from "@reduxjs/toolkit";
import multiLangSlice from "./features/multiLang/multiLangSlice";
import signinSlice from "./features/user/signinSlice";
const reducers = {
  language: multiLangSlice,
  admin: signinSlice,
};
export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
