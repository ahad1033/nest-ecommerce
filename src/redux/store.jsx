import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./features/AllCategory/AllCategorySlice";

const store = configureStore({
  reducer: {
    Categories: CategoryReducer,
  },
});

export default store;
