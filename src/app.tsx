import { Restaurants } from "./pages/restaurants";
import { Provider } from "react-redux";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <Restaurants />
    </Provider>
  )
}