import { configureStore } from "@reduxjs/toolkit";
import multiLangSlice from "./features/multiLang/multiLangSlice";
const reducers = {
  language: multiLangSlice,
};
export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
