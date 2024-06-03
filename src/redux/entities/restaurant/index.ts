import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { IRestaurant } from "../../../interfaces";

interface RestaurantState {
  entities: Record<string, IRestaurant>;
  ids: string[];
  status: REQUEST_STATUSES;
}

const initialState: RestaurantState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.IDLE,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUSES.PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.status = REQUEST_STATUSES.FULFILLED;

        state.entities = Object.fromEntries(
          action.payload.map((item) => [item.id, item])
        );

        state.ids = action.payload.map(({ id }) => id);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUSES.REJECTED;
      }),
});
