import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./features/AllCategory/AllCategorySlice";
import BestDealReducer from "./features/BestDeal/BestDealSlice";

const store = configureStore({
  reducer: {
    Categories: CategoryReducer,
    BestDeals: BestDealReducer,
  },
});

export default store;
