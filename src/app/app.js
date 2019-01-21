import React from "react";
import { Route, HashRouter, Switch, NavLink } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import MangaListPage from "./pages/manga-list-page";
import MangaPage from "./pages/manga-page";
import ReadPage from "./pages/read-page";
import TestPage from "./pages/test-page";

import { Themes } from "./themes/";

var fs = require("fs");
var path = require("path");
var { app } = window.require("electron").remote;

import "./res/scss/app.scss";

// Application component
const Application = () => (
  <div className="container">
    <HashRouter>
      <MuiThemeProvider theme={Themes.defaultTheme}>
        <CssBaseline />
        <NavLink to="/">[Temp]Back to List</NavLink>
        <Switch>
          <Route exact path="/" component={MangaListPage} />
          <Route path="/manga/:mangaId" component={MangaPage} />
          <Route path="/read/:href" component={ReadPage} />
        </Switch>
      </MuiThemeProvider>
    </HashRouter>
  </div>
);

export default Application;
