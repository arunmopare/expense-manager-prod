import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Auth0Provider } from "@auth0/auth0-react";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

let domain = process.env.REACT_APP_AUTH0_DOMAIN;
let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <SpeechProvider
      appId="7c4aee08-1073-4a32-b862-ebe1850e0732"
      language="en-US"
    >
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
