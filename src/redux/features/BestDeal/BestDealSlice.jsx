import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";

export const getAsyncBestDeals = createAsyncThunk(
  "bestDeals/fetchBestDeals",
  async () => {
    try {
      const res = await axiosInstance.get("/best-deals");
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

const initialState = {
    deals: [],
    status: "idle",
    error: null
}

const bestDealsSlice = createSlice({
    name: "bestDeals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncBestDeals.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAsyncBestDeals.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.deals = action.payload;
        })
        .addCase(getAsyncBestDeals.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload.error;
        })
    }
})

export default bestDealsSlice.reducer;

