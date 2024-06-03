import { RootState } from "../../index";

export const selectDishModule = (state: RootState) => state?.dish;
export const selectDishIds = (state: RootState) => selectDishModule(state)?.ids;
export const selectDishBiId = (state: RootState, id: string) => {
  const result = selectDishModule(state)?.entities as Record<string, any>;

  return result[id];
};

export const selectDishLoadingStatus = (state: RootState) =>
  selectDishModule(state).status;
