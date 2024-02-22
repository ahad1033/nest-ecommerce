import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";

export const getAsyncAdvertise = createAsyncThunk(
  "advertise/allAdvertise",
  async () => {
    try {
      const res = await axiosInstance.get("/advertise");
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

const initialState = {
    advertises: [],
    status: "idle",
    error: null
}

const advertiseSlice = createSlice({
    name: "advertise",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncAdvertise.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAsyncAdvertise.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.advertises = action.payload;
        })
        .addCase(getAsyncAdvertise.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload.error;
        })
    }
})

export default advertiseSlice.reducer;
