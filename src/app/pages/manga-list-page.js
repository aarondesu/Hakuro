import React from "react";
import { connect } from "react-redux";
import { Button, Typography, Grid, Paper } from "@material-ui/core";
import {} from "react-router-dom";

import MangaItem from "../components/manga-item";
import { doGetMangaList, resetMangaInfo } from "../actions/manga-action";

import "../res/scss/manga-list.scss";

// Manga Page class
class MangaListPage extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
    this.props.doGetMangaList(0);
    this.props.resetMangaInfo();
  }

  render() {
    return (
      <React.Fragment>
        <Grid
          container
          className="manga-list-container"
          spacing={32}
          justify="center"
          zeroMinWidth
        >
          {this.props.mangaList.manga &&
            this.props.mangaList.manga.map(manga => (
              <Grid key={manga.href} item>
                <MangaItem {...manga} />
              </Grid>
            ))}
        </Grid>
        >
      </React.Fragment>
    );
  }
}

// Set props
const mapStateProps = state => ({
  mangaList: state.mangaList
});

const mapActionProps = dispatch => ({
  doGetMangaList: page => dispatch(doGetMangaList(page)),
  resetMangaInfo: () => dispatch(resetMangaInfo())
});

export default connect(
  mapStateProps,
  mapActionProps
)(MangaListPage);
