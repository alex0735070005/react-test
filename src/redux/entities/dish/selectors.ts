export const selectDishModule = state => state?.dish;
export const selectDishIds = state => selectDishModule(state)?.ids;
export const selectDishBiId = (state, id) => selectDishModule(state)?.entities[id];
export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;