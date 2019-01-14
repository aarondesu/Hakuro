import React from "react";
import { Paper } from "@material-ui/core";

import "../res/scss/manga-item.scss";

const MangaItem = manga => (
  <Paper className="manga-item-container">
    <div className="image-container">
      <img
        src={
          manga.im !== null
            ? `https://cdn.mangaeden.com/mangasimg/${manga.im}`
            : ""
        }
      />
    </div>
    <div className="tile-container">{manga.a.replace("-", " ")}</div>
  </Paper>
);

export default MangaItem;
