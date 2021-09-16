import axios from "axios";
import { USER_TYPES } from "../types";
import config from "../config";
function fetchUsers() {
  const request = axios.get(`${config.JSON_PLACEHOLDER_API_BASE_URL}/users`);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: USER_TYPES.FETCH_PROFILES,
        payload: data,
      });
    });
  };
}

export default {
  fetchUsers,
};
