import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import Application from "./app";
import { store } from "./store";

const renderApplication = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
};

renderApplication(Application);

if (module.hot) {
  module.hot.accept("./app", () => {
    const nextApp = require("./app").default;
    render(nextApp);
  });
}
