import React from "react";
import { Paper } from "@material-ui/core";

//
const MangaItem = props => {
  return (
    <Paper className="manga-item-container" square>
      <div className="image-container">
        <img
          src={
            props.manga.im !== null
              ? `https://cdn.mangaeden.com/mangasimg/${props.manga.im}`
              : ""
          }
        />
      </div>
    </Paper>
  );
};

export default MangaItem;
