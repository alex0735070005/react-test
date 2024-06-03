/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAppSelector } from "../redux";
import { selectRestaurantBiId } from "../redux/entities/restaurant/selectors";

interface Props {
  onClick: () => void;
  restaurantId: string;
  activeRestaurantId: string;
}

export const Tab = ({ onClick, restaurantId, activeRestaurantId }: Props) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantBiId(state, restaurantId)
  );

  const isActive = activeRestaurantId && restaurantId === activeRestaurantId;

  if (!restaurant) return null;

  return (
    <div
      css={css`
        position: relative;
        padding: 5px 15px;
        border-right: 1px solid;
        &:last-of-type {
          border-right: none;
        }
        background: #ccc;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {restaurant.name}
      {isActive && (
        <div
          css={css`
            height: 2px;
            background: #000;
            position: absolute;
            left: 5px;
            right: 5px;
          `}
        ></div>
      )}
    </div>
  );
};
