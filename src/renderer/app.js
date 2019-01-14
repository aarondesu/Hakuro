import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { updateUser } from "./actions/user-actions";
import MangaListPage from "./pages/manga-list";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./res/scss/app.scss";

const Application = ({}) => (
  <div className="container">
    <HashRouter>
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route path="/" component={MangaListPage} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  </div>
);

export default Application;
