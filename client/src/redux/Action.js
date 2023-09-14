import axios from "axios";

export const GET_ALL_USERS_BY_STREAM = "GET_ALL_USERS_BY_STREAM";

export const getAllUsers = (query) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`/torre/`, { query: query, limit: 50 });
      return dispatch({ type: GET_ALL_USERS_BY_STREAM, payload: data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};
