import React from "react";
import { connect } from "react-redux";
import { InputGroup, Label, Button } from "@blueprintjs/core";

import { apiGetMangaList } from "../actions/manga-action";

const MangaListContainer = props => (
  <div>
    <h2>Manga List Container</h2>
    <ul className="manga-list-container">{props.test}</ul>
    <Button onClick={props.onGetListAction} value="0" text="Test API" />
  </div>
);

const mapStateProps = (state, props) => {
  return {
    test: <li>Hello World!</li>
  };
};

const mapActionProps = {
  onGetListAction: apiGetMangaList
};

export default connect(
  mapStateProps,
  mapActionProps
)(MangaListContainer);
