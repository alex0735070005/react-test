import { selectDishBiId } from "../redux/entities/dish/selectors";
import { useAppSelector } from "../redux";

interface Props {
  dishId: string;
}

export const Dish = ({ dishId }: Props) => {
  const dish = useAppSelector((state) => selectDishBiId(state, dishId));

  if (!dish) return null;

  return <div>{dish.name}</div>;
};
