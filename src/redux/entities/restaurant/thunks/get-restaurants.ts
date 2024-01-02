import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async (_, { rejectWithValue}) => {

    // 1.1 Write a request to createAsyncThunk

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