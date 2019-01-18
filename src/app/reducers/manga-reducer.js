import { UPDATE_MANGA_LIST, UPDATE_MANGA_INFO } from "../actions/manga-action";

export const mangaList = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MANGA_LIST:
      return action.data;
    default:
      return state;
  }
};

export const mangaInfo = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MANGA_INFO:
      return action.data;
    default:
      return state;
  }
};
