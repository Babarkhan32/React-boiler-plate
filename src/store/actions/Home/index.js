import types from "./types";
import { getUsersService } from "../../services/Home";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: types.LOAD_USERS_LOADING });
  const result = await getUsersService();

  if (!result.success) {
    return dispatch({
      type: types.LOAD_USERS_ERROR,
      error: result.message || "Unexpected Error!!!",
    });
  }
  return dispatch({ type: types.LOAD_USERS_SUCCESS, data: result.data });
};
