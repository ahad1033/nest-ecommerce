import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";

export const getAsyncAllProducts = createAsyncThunk(
  "category/allCategory",
  async () => {
    try {
      const res = await axiosInstance.get("/all-category");
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

const initialState = {
    categories: [],
    status: "idle",
    error: null
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncAllProducts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAsyncAllProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.categories = action.payload;
        })
        .addCase(getAsyncAllProducts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload.error;
        })
    }
})

export default categorySlice.reducer;
