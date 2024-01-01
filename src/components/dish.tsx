import { useSelector } from "react-redux";
import { selectDishBiId } from "../redux/entities/dish/selectors";

export const Dish = ({ dishId }) => {
  const dish = useSelector(state => selectDishBiId(state, dishId));
  if (!dish) return null;

  return (
    <div>
      {dish.name}
    </div>
  )
}