import { Dish } from "./dish";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getDishes } from "../redux/entities/dish/thunks/get-dishes";
import {selectDishLoadingStatus} from "../redux/entities/dish/selectors";

export const Dishes = ({ restaurantId, dishIds }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId))
  }, [restaurantId])

  const loadingStatus = useSelector(selectDishLoadingStatus)
  if (loadingStatus === 'pending') return "Loading..."

  return (
    <ul>
      {dishIds.map(dishId => <li key={dishId}>
        <Dish dishId={dishId} />
      </li>)}
    </ul>
  )
}