import { initStore } from "./store";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { AppDecorator } from "./AppDecorator";
import { createTheme } from "./theme";

var store = initStore({
  initialState: {},
});

render(
  <AppDecorator {...{ createTheme }}>
    <Provider {...{ store }}>
      <App />
    </Provider>
  </AppDecorator>,
  document.getElementById("root")
);
