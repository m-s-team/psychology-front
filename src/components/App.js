import React, { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
// components
import Layout from "./Layout";
// pages
import Error from "../pages/error";
import Login from "../pages/login";
// context

import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/home/home";
import { Router } from "@material-ui/icons";
import Dashboard from "../pages/dashboard";
import { CircularProgress } from "@material-ui/core";
import Loading from "./Loading";
import VisualReasoningSubtest from "../pages/Exams/VisualReasoningSubtest";

export const RECAPTCHA_SITE_KEY = "6LfKKAEVAAAAAGQv8jCaT0MA7olm8fOOJw4Mqa6T";

export default function App() {
  // global
  // var { isAuthenticated } = useUserState();
  // var  isAuthenticated  = true;
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return (<Loading />);
  }


  return (
    isAuthenticated ?
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
          {/*<Route exact path="/"  component={Home}/>*/}
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          {/*<PublicRoute path="/login" component={Login}/>*/}

          <Route exact
                 path="/login"
                 render={() => loginWithRedirect()} />

            <Route
              path="/test/barret/visualReasoningSubtest"
              component={VisualReasoningSubtest} />

          <Route component={Error} />

        </Switch>
      </HashRouter>
      :
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />} />
          <Route
            path="/home"
            component={Home} />
          <Route component={Home} />
        </Switch>
      </HashRouter>

  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
