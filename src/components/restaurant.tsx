/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dishes } from "./dishes";
import { useAppSelector } from "../redux";
import { selectRestaurantBiId } from "../redux/entities/restaurant/selectors";

interface Props {
  restaurantId: string;
}

export const Restaurant = ({ restaurantId }: Props) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantBiId(state, restaurantId)
  );

  if (!restaurant) return null;

  return (
    <div>
      <h3>
        {restaurant.name} {status}
      </h3>
      <div
        css={css`
          position: relative;
          margin-top: 15px;
        `}
      >
        <Dishes dishIds={restaurant.menu} restaurantId={restaurantId} />
      </div>
    </div>
  );
};
