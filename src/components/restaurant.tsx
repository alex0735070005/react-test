import { Dishes } from "./dishes";
import { useSelector } from "react-redux";
import { selectRestaurantBiId } from "../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId))
  if (!restaurant) return null;

  return (
    <div>
      <h3>{restaurant.name}</h3>
      <Dishes dishIds={restaurant.menu} restaurantId={restaurantId} />
    </div>
  )
}