import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishes} from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.IDLE
  }),
  extraReducers: builder =>
    builder
      .addCase(getDishes.pending,
        (state) => {
          state.status = REQUEST_STATUSES.PENDING
        })
      .addCase(getDishes.fulfilled, (state, { payload }) => {

/*        3. Write data merging logic

        3.2 Data and id were merged and not overwritten
        3.3 id were not duplicated if there are repetitions
*/

      })
      .addCase(getDishes.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED
        })
})