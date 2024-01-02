import { Dish } from "./dish";

export const Dishes = ({ dishIds }) => {

  // 2.3 Make a request for data dishes by restaurantId
  // 2.4 Add loader

  return (
    <ul>
      {dishIds.map(dishId => <li key={dishId}>
        <Dish dishId={dishId} />
      </li>)}
    </ul>
  )
}