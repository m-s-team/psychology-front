import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";
import TestPage from "../../pages/test/TestPage";
import BookList from "../../pages/BookList/BookList";
import EditBook from "../../pages/BookList/EditBook";
import MoviesList from "../../pages/movies/MoviesList";
import Profile from "../../pages/profile/Profile";
import JamesBarret from "../../pages/James_Barrett_Test/JamesBarret";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/profile" component={Profile} />
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/JamesBarret" component={JamesBarret} />
              <Route path="/app/test" component={TestPage} />
              <Route path="/app/bookList" component={BookList} />
              <Route path="/app/editBook" component={EditBook} />
              <Route path="/app/movies" component={MoviesList} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
