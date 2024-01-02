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
      (state) => {
        state.status = REQUEST_STATUSES.PENDING;
      })
      .addCase(getRestaurants.fulfilled,
        (state, { payload }) => {

/*        3. Write data merging logic

          3.2 Data and id were merged and not overwritten
          3.3 id were not duplicated if there are repetitions
*/

        }
      )
      .addCase(getRestaurants.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED;
        }
      )
})