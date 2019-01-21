import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

/*
// Define the style of the component
const styles = theme => ({
  overlayContainer: {},
  itemContainer: {},
  imageContainer: {},
  cover: {},
  titleContainer: {
    marginTop: "2px"
  },
  title: {
    fontSize: theme.label.fontSize,
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    fontWeight: "bold"
  },
  chapter: {
    fontSize: theme.label.fontSize,
    color: "#666666"
  }
});
*/

const MangaItem = props => {
  return (
    <div className="item-container" draggable={false}>
      <div className="image-container">
        <NavLink to={`/manga/${props.href}`}>
          <img src={props.thumbnail} draggable={false} />
        </NavLink>
      </div>
      <div className="rating-overlay" hidden>
        <div>★ ★ ★ ★ ★</div>
        <span>{props.rating}</span>
      </div>
      <div className="title-container">
        <Typography className="title-name">{props.name}</Typography>
        <Typography className="title-chapter">{props.latestChapter}</Typography>
      </div>
    </div>
  );
};

export default MangaItem;
