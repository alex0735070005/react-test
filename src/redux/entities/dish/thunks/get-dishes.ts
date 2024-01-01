import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantBiId } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
  'dish/getDishes',
  async (restaurantId, { rejectWithValue }) => {
    if (!restaurantId) return null;
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty dish")
    }
    return result;
  },
  {
      condition: (restaurantId, { getState }) => {
          const dishIdsByRestaurantId = selectRestaurantBiId(getState(), restaurantId).menu;
          const dishIds = selectDishIds(getState());

          return !dishIdsByRestaurantId.every(dishId => {
              return dishIds.includes(dishId)
          })
      }
  }
)

