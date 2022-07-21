import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../../utils/LocalStorage";

const lang: string = getLocal("lang");

const initialState: { language: string } = {
  language: lang ? lang : "en",
};
const multiLangSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    set_lang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { set_lang } = multiLangSlice.actions;
export default multiLangSlice.reducer;
