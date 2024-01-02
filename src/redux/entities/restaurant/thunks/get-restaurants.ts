import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async (_, { rejectWithValue}) => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty restaurants")
    }
    return result;
  },
  {
    condition: () => {
      /*
          3. Write query optimization logic
          3.1 If the data has been downloaded a second time, we do not download it
*/
    }
  }
)