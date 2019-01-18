import React from "react";
import { connect } from "react-redux";
import { Button, Typography, Grid, Paper } from "@material-ui/core";
import {} from "react-router-dom";

import MangaItem from "../components/manga-item";
import { doGetMangaList } from "../actions/manga-action";

import "../res/scss/manga-list.scss";

// Manga Page class
class MangaListPage extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
    this.props.doGetMangaList(0);
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Manga List
        </Typography>

        <Grid
          container
          className="manga-list-container"
          spacing={24}
          justify="center"
        />
      </div>
    );
  }
}

// Set props
const mapStateProps = state => ({
  mangaList: state.mangaList
});

const mapActionProps = dispatch => ({
  doGetMangaList: page => dispatch(doGetMangaList(page))
});

export default connect(
  mapStateProps,
  mapActionProps
)(MangaListPage);
