import { Tab } from "./tab";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../redux/entities/restaurant/selectors";

export const Tabs = ({ onRestaurantSelect }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  if (!restaurantIds) return null;

  return (
    <ul>
      {restaurantIds.map((restaurantId) => <li key={restaurantId}>
        <Tab onClick={() => onRestaurantSelect(restaurantId)} restaurantId={restaurantId} />
      </li>)}
    </ul>
  )
}