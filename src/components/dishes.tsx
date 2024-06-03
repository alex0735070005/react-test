import { useEffect } from "react";
import { Dish } from "./dish";
import { getDishes } from "../redux/entities/dish/thunks/get-dishes";
import { useAppDispatch, useAppSelector } from "../redux";
import { Loader } from "./loader";
import { selectDishLoadingStatus } from "../redux/entities/dish/selectors";
import { REQUEST_STATUSES } from "../constants/request-statuses";

interface Props {
  dishIds: string[];
  restaurantId: string;
}

export const Dishes = ({ dishIds, restaurantId }: Props) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectDishLoadingStatus);

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]);

  if (status === REQUEST_STATUSES.PENDING) return <Loader />;

  return (
    <ul>
      {dishIds.map((dishId) => (
        <li key={dishId}>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
