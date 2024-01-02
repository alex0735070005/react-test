import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware())
})
export default store;
