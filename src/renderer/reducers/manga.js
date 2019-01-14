import { API_REQUEST_MANGA_LIST } from "../actions/manga-action";

export const mangaReducer = (state = [], action) => {
  switch (action.type) {
    case API_REQUEST_MANGA_LIST:
      // TODO: do something
      return action.payload.mangaList;
    default:
      return state;
  }
};

export default mangaReducer;
