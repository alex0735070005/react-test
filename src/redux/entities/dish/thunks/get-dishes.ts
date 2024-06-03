import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDish } from "../../../../interfaces";
import { RootState } from "../../..";
import { selectDishIds } from "../selectors";
import { selectRestaurantBiId } from "../../restaurant/selectors";

interface ThunkApiConfig {
  rejectValue: string;
}

export const getDishes = createAsyncThunk<IDish[], string, ThunkApiConfig>(
  "dish/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
      );

      if (!response.ok) {
        return rejectWithValue("Failed to fetch dishes");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch dishes");
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as RootState;

      const restaurant = selectRestaurantBiId(state, restaurantId);
      const dishIds = selectDishIds(state);

      const allDishesExist = restaurant.menu.every((id) =>
        dishIds.includes(id)
      );

      if (allDishesExist) {
        return false;
      }

      return true;
    },
  }
);
