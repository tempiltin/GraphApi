import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import initFacebookSDK from "./initFacebookSDK";

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

initFacebookSDK().then(() => {
  renderApp();
});