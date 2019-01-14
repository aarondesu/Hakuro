import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { PageTransition } from "react-router-page-transition";
import { connect } from "react-redux";

import { updateUser } from "./actions/user-actions";
import MangaListContainer from "./containers/manga-list-container";

import "./res/scss/app.scss";

const Application = ({}) => (
  <div className="container">
    <HashRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={MangaListContainer} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  </div>
);

const mapStateProps = (state, props) => {
  return {
    products: state.products,
    user: state.user
  };
};

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateProps,
  mapActionsToProps
)(Application);
