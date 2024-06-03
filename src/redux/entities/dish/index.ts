import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { IDish } from "../../../interfaces";

interface DishState {
  entities: Record<string, IDish>;
  ids: string[];
  status: REQUEST_STATUSES;
}

const initialState: DishState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.IDLE,
};

export const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = REQUEST_STATUSES.PENDING;
      })
      .addCase(getDishes.fulfilled, (state, action) => {
        state.status = REQUEST_STATUSES.FULFILLED;

        action.payload.forEach((item) => {
          if (!state.entities[item.id]) {
            state.entities[item.id] = item;
            state.ids.push(item.id);
          }
        });
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = REQUEST_STATUSES.REJECTED;
      }),
});
