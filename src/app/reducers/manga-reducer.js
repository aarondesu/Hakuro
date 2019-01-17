import { UPDATE_MANGA_LIST } from "../actions/list-action";

export const allManga = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MANGA_LIST:
      return action.data;
    default:
      return state;
  }
};

export const searchedManga = (state = [], action) => {
  console.log("Searched Manga");
};

export const popularManga = (state = [], action) => {};
