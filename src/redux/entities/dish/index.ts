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

        entityAdapter.upsertMany(state, payload)
/*

      Решение без entityAdapter
      state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, state.entities)

        state.ids = Array.from(
          new Set([...state.ids, ...payload.map(({ id }) => id)])
        )*/


        state.status = REQUEST_STATUSES.FULFILLED;
      })
      .addCase(getDishes.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED
        })
})