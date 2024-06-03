import { IRestaurant } from "../../../interfaces";
import { RootState } from "../../index";

export const selectRestaurantModule = (state: RootState) => state.restaurant;

export const selectRestaurantIds = (state: RootState) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantBiId = (state: RootState, id: string) => {
  const result = selectRestaurantModule(state).entities as Record<
    string,
    IRestaurant
  >;

  return result[id];
};

export const selectRestaurantLoadingStatus = (state: RootState) =>
  selectRestaurantModule(state).status;
