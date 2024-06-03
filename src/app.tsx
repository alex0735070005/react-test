import { Restaurants } from "./pages/restaurants";
import { Provider } from "react-redux";
import store from "./redux";
import { GlobalStyles } from "./components/global";
import { Container } from "./components/container";

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <Restaurants />
      </Container>
    </Provider>
  );
};
