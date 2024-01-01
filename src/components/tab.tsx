import { selectRestaurantBiId } from "../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const Tab = ({ onClick, restaurantId }) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId));
  if (!restaurant) return null;
  return (
    <button onClick={onClick}>
      {restaurant.name}
    </button>
  )
}