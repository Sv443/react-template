import { initStore } from "./store";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { AppDecorator } from "./AppDecorator";
import { createTheme } from "./theme";
import { ErrorBoundary } from "./Layout";

var store = initStore({
  initialState: {},
});

const useDarkMode = () => true; // TODO: make togglable

render(
  <AppDecorator {...{ createTheme, useDarkMode }}>
    <Provider {...{ store }}>
      <ErrorBoundary errorText="Sorry, something went wrong :/">
        <App />
      </ErrorBoundary>
    </Provider>
  </AppDecorator>,
  document.getElementById("root")
);
