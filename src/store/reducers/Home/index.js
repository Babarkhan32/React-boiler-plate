import types from "../../actions/Home/types";
const initialState = {
  data: [],
  loading: false,
  error: "",
};
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case types.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case types.LOAD_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
