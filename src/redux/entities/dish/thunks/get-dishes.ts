import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantBiId } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
  'dish/getDishes',
  async (restaurantId, { rejectWithValue }) => {

    // Write a request to createAsyncThunk

  },
  {
      condition: (restaurant) => {

      }
  }
)

