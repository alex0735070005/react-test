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
      condition: (restaurant) => {
/*
          3. Write query optimization logic
          3.1 If the data has been downloaded a second time, we do not download it
*/

      }
  }
)

