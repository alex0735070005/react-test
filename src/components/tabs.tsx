/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Tab } from "./tab";
import { selectRestaurantIds } from "../redux/entities/restaurant/selectors";
import { useAppSelector } from "../redux";

interface Props {
  activeRestaurantId: string;
  onRestaurantSelect: (restaurantId: string) => void;
}

export const Tabs = ({ onRestaurantSelect, activeRestaurantId }: Props) => {
  const restaurantIds = useAppSelector(selectRestaurantIds);

  if (!restaurantIds) return null;

  return (
    <ul
      css={css`
        display: flex;
        margin-bottom: 15px;
      `}
    >
      {restaurantIds.map((restaurantId) => (
        <Tab
          key={restaurantId}
          onClick={() => onRestaurantSelect(restaurantId)}
          restaurantId={restaurantId}
          activeRestaurantId={activeRestaurantId}
        />
      ))}
    </ul>
  );
};
