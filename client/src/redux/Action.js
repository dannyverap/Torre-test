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

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
      try {
          const { data } = await axios.post(endpoint, character)
          return dispatch({
              type: 'ADD_FAV',
              payload: data,
          })
      }
      catch (error) {
          console.log(error);
      }
  }
};



// export const removeFav = (id) => {
//     return { type: "REMOVE_FAV", payload: id }
// };

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
      try {
          const { data } = await axios.delete(endpoint)
          return dispatch({
              type: 'REMOVE_FAV',
              payload: data,
          });
      } catch (error) {
          console.log(error);
      }
  };
};
