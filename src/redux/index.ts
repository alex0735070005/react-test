import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { dishSlice } from "./entities/dish";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware())
})
export default store;
