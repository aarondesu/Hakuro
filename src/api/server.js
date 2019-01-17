const express = require("express");
const app = express();
const fs = require("fs");

const scraper = require("./scraper");

// Returns a full list of manga from the source
app.get("/list", (req, res) => {
  scraper
    ._getFullMangaList()
    .then(data => {
      // TODO: Returns data to the application
      // res.send(JSON.stringify(data));
    })
    .catch(error => console.error);
});

var server = app.listen(3542, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Server listening at http:\\${host}:${port}`);
  console.log("server api started.");
});
