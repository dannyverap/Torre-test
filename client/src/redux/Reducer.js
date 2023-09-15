import { GET_ALL_USERS_BY_STREAM } from "./Action";

const initialState = {
  allUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_BY_STREAM:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};


export default reducer;
