import $ from "jquery";

export const UPDATE_MANGA_LIST = "manga:getMangaList";

// Updates the list
export const updateMangaList = data => ({
  type: UPDATE_MANGA_LIST,
  data
});

// Get the manga list from the api
export const doGetMangaList = page => {
  console.log(`Called 'doGetMangaList' function. Page: ${page}`);
  return (dispatch, getState) => {
    $.ajax({
      url: `https://www.mangaeden.com/api/list/0/?p=${page}&l=30`,
      success: result => {
        // Call 'updateMangaList' function
        dispatch(updateMangaList(result.manga));
      },
      error: result => {
        console.log("Unable to request manga list api");
      }
    });
  };
};
