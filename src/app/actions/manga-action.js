import $ from "jquery";

const log = require("electron-log");
const scraper = require("../tools/scraper");

export const UPDATE_MANGA_LIST = "manga:getMangaList";
export const UPDATE_MANGA_INFO = "manga:getMangaInfo";

// Updates the list
export const updateMangaList = data => ({
  type: UPDATE_MANGA_LIST,
  data
});

export const updateMangaInfo = data => ({
  type: UPDATE_MANGA_INFO,
  data
});

// Get the manga list from the api
export const doGetMangaList = page => {
  console.log(`Called 'doGetMangaList' function. Page: ${page}`);
  return (dispatch, getState) => {
    // Get data from scraper
    scraper
      ._getMangaList(1)
      .then(data => {
        dispatch(updateMangaList(data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const doGetMangaInfo = mangaId => {
  return (dispatch, getState) => {
    scraper
      ._getMangaInfo(mangaId)
      .then(data => {
        dispatch(updateMangaInfo(data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};
