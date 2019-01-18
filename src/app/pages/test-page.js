import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { doGetMangaList, doGetMangaInfo } from "../actions/manga-action";

class TestPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={this.props.doGetMangaList}>
          Get Full Manga List
        </Button>

        <Button variant="contained" onClick={this.props.doGetMangaInfo}>
          Get manga info
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateProps = state => ({
  mangaList: state.mangaList,
  mangaInfo: state.mangaInfo
});

const mapActionProps = dispatch => ({
  doGetMangaList: () => dispatch(doGetMangaList(1)),
  doGetMangaInfo: () => dispatch(doGetMangaInfo("goblin_slayer"))
});

export default connect(
  mapStateProps,
  mapActionProps
)(TestPage);
