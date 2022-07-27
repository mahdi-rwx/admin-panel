import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "./signinService";
import { IState } from "./type";

const initialState: IState = {
  user: null,
  loading: false,
  error: "",
};

export const signinAdmin: any = createAsyncThunk(
  "signin/admin",
  async (user) => {
    try {
      return await login(user);
    } catch (error: any) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return msg;
    }
  }
);

const signinSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(signinAdmin.pending, (state: IState) => {
      state.loading = true;
    });
    bulider.addCase(signinAdmin.fulfilled, (state: IState, action: any) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    bulider.addCase(signinAdmin.rejected, (state: IState, action: any) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export default signinSlice.reducer;
