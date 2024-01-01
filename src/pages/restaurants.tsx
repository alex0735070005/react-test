import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tabs } from "../components/tabs";
import { useEffect } from "react";
import { getRestaurants } from "../redux/entities/restaurant/thunks/get-restaurants";
import { Restaurant } from "../components/restaurant";

export const Restaurants = () => {

  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants())
  }, [])

  return (
    <div>
      <Tabs onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)} />
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  )
}