import $ from "jquery";

export const API_REQUEST_MANGA_LIST = "manga:apiGetMangaList";

export const updateMangaList = data => ({});

export const apiGetMangaList = language => {
  return dispatch => {
    $.ajax({
      url: `https://www.mangaeden.com/api/list/0/`,
      success: result => {
        console.log("Hello World!");
      },
      error: result => {
        console.log("Unable to request manga list api");
      }
    });
  };
};
