import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import {Auth0Provider} from "@auth0/auth0-react";


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience=process.env.REACT_APP_AUTH0_AUDIENCE ;



ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ToastContainer/>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
          <Auth0Provider
              domain={domain}
              clientId={clientId}
              audience={ process.env.REACT_APP_AUTH0_AUDIENCE }
              redirectUri={window.location.origin}>
              <App />
          </Auth0Provider>
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
