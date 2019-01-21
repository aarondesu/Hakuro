import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  Link,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { doGetMangaInfo } from "../actions/manga-action";

import "../res/scss/manga-page.scss";

class MangaPage extends React.Component {
  componentDidMount() {
    // Get the information of the manga
    this.props.doGetMangaInfo(this.props.match.params.mangaId);
  }

  renderInfo() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="cover">
            <img src={this.props.mangaInfo.cover} />
          </div>
          <div className="details">
            <Typography variant="h4">{this.props.mangaInfo.name}</Typography>
            <Typography variant="subtitle1">
              {this.props.mangaInfo.author}
            </Typography>
            <div hidden>{this.props.mangaInfo.rating}</div>
            <div className="description">
              <Typography variant="body2">
                {this.props.mangaInfo.description}
              </Typography>
            </div>
          </div>
        </div>
        <div className="chapter-list">
          <Typography variant="h5">Chapters</Typography>
          <List component="nav">
            {this.props.mangaInfo.chapters &&
              this.props.mangaInfo.chapters.map(chapter => (
                <ListItem
                  button
                  component={NavLink}
                  to={`/read/${chapter.href}`}
                  key={chapter.name}
                >
                  <ListItemText
                    primary={chapter.name}
                    secondary={chapter.release}
                  />
                </ListItem>
              ))}
          </List>
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (this.props.mangaInfo === null) {
      return <h1>Loading...</h1>;
    } else {
      return this.renderInfo();
    }
  }
}

const mapStateProps = state => ({
  mangaInfo: state.mangaInfo
});

const mapActionProps = dispatch => ({
  doGetMangaInfo: mangaId => dispatch(doGetMangaInfo(mangaId))
});

export default connect(
  mapStateProps,
  mapActionProps
)(MangaPage);
