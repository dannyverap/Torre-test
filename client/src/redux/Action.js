import axios from "axios";

export const GET_ALL_USERS_BY_STREAM = "GET_ALL_USERS_BY_STREAM";
export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";

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

export const getAllFavorites = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/favorites/`);
      return dispatch({ type: GET_ALL_FAVORITES, payload: data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};



export const addFav = async (user) => {
  try {
    const { data } = await axios.post("/favorites/", user);
    return "ok";
  } catch (error) {
    alert(error.response.data);
  }
};

export const removeFav = async (ardaId) => {
  try {
    const { data } = await axios.delete(`/favorites/${ardaId}`);
    return "deleted";
  } catch (error) {
    alert(error.response.data);
  }
};

export const getFav = async (ardaId) => {
  try {
    const { data } = await axios.get(`/favorites/${ardaId}`);
    return ardaId;
  } catch (error) {
    return false
  }
};
