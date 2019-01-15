import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { updateUser } from "./actions/user-actions";
import MangaListPage from "./pages/manga-list";

import { THEMES } from "./themes/";

import "./res/scss/app.scss";

const Application = ({}) => (
  <div className="container">
    <HashRouter>
      <MuiThemeProvider theme={THEMES.DefaultTheme}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={MangaListPage} />
        </Switch>
      </MuiThemeProvider>
    </HashRouter>
  </div>
);

export default Application;
