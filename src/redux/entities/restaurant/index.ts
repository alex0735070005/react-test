import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.IDLE
  },
  extraReducers: builder =>
    builder
      .addCase(getRestaurants.pending,

      })
      .addCase(getRestaurants.fulfilled,
        (state) => {
            /*
            1.2 Save data to the store, write createSlice
            */
        }
      )
      .addCase(getRestaurants.rejected,

      )
})