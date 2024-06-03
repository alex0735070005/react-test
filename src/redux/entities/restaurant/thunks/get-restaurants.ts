import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRestaurant } from "../../../../interfaces";
import { RootState } from "../../..";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

interface ThunkApiConfig {
  rejectValue: string;
}

export const getRestaurants = createAsyncThunk<
  IRestaurant[],
  void,
  ThunkApiConfig
>(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/restaurants");

      if (!response.ok) {
        return rejectWithValue("Failed to fetch restaurants");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch restaurants");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const { entities, status } = state.restaurant;

      if (
        status === REQUEST_STATUSES.FULFILLED ||
        Object.keys(entities).length > 0
      ) {
        return false;
      }

      return true;
    },
  }
);
