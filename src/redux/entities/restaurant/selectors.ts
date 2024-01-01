export const selectRestaurantModule = state => state.restaurant;

export const selectRestaurantIds = state => selectRestaurantModule(state).ids;

export const selectRestaurantBiId = (state, id) => selectRestaurantModule(state).entities[id];

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;


