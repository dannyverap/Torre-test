import { GET_ALL_USERS_BY_STREAM, GET_ALL_FAVORITES } from "./Action";

const initialState = {
  allUsers: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_BY_STREAM:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_ALL_FAVORITES:
      return {
        ...state,
        allFavorites: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
