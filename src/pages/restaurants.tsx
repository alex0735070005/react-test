import { useState } from "react";
import { Tabs } from "../components/tabs";
import { Restaurant } from "../components/restaurant";

export const Restaurants = () => {

  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  // 1.3 Make a request for restaurant data

  return (
    <div>
      <Tabs onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)} />
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  )
}