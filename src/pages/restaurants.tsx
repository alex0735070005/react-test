import { useEffect, useState } from "react";
import { Tabs } from "../components/tabs";
import { Restaurant } from "../components/restaurant";
import { getRestaurants } from "../redux/entities/restaurant/thunks/get-restaurants";
import { useAppDispatch } from "../redux";
import { IRestaurant } from "../interfaces";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants()).then((data) => {
      const [firstItem] = data.payload as IRestaurant[];

      if (firstItem) {
        setActiveRestaurantId(firstItem.id);
      }
    });
  }, []);

  return (
    <div>
      <Tabs
        activeRestaurantId={activeRestaurantId}
        onRestaurantSelect={(restaurantId) =>
          setActiveRestaurantId(restaurantId)
        }
      />
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  );
};
