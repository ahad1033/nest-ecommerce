import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./features/AllCategory/AllCategorySlice";
import BestDealReducer from "./features/BestDeal/BestDealSlice";
import AdvertiseReducer from "./features/Advertise/AdvertiseSlice";

const store = configureStore({
  reducer: {
    Categories: CategoryReducer,
    BestDeals: BestDealReducer,
    Advertise: AdvertiseReducer,
  },
});

export default store;
