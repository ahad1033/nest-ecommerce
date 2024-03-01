import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./features/AllCategory/AllCategorySlice";
import BestDealReducer from "./features/BestDeal/BestDealSlice";
import AdvertiseReducer from "./features/Advertise/AdvertiseSlice";

const store = configureStore({
  reducer: {
    Advertise: AdvertiseReducer,
    BestDeals: BestDealReducer,
    Categories: CategoryReducer,
  },
});

export default store;
