import {
  UPDATE_MANGA_LIST,
  UPDATE_MANGA_INFO,
  RESET_MANGA_INFO
} from "../actions/manga-action";

const initialState = {};

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
    case RESET_MANGA_INFO:
      return initialState;
    default:
      return state;
  }
};
