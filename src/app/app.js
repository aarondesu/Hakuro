import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import MangaListPage from "./pages/manga-list";
import TestPage from "./pages/test-page";

import { THEMES } from "./themes/";

var fs = require("fs");
var path = require("path");
var { app } = window.require("electron").remote;

import "./res/scss/app.scss";

class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <MuiThemeProvider theme={THEMES.DefaultTheme}>
            <CssBaseline />
            <Switch>
              <Route path="/" component={TestPage} />
            </Switch>
          </MuiThemeProvider>
        </HashRouter>
      </div>
    );
  }
}

export default Application;
