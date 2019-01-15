import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MangaItem from "../components/manga-item";
import { doGetMangaList } from "../actions/list-action";
import { Button, Typography, Grid, Paper } from "@material-ui/core";

import "../res/scss/manga-list.scss";

// Set props
const mapStateProps = state => ({
  allManga: state.allManga
});

const mapActionProps = dispatch => ({
  doGetMangaList: page => dispatch(doGetMangaList(page))
});

// Manga Page class
class MangaListPage extends React.Component {
  constructor(props) {
    super(props);
  }

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
        >
          {this.props.allManga.map(manga => (
            <Grid key={manga.im} item>
              <MangaItem manga={manga} classes={this.props.classes} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

MangaListPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateProps,
  mapActionProps
)(MangaListPage);
