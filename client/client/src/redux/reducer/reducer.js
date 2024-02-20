import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "../actiontypes/actionTypes";

const init = {
  user: "",
  error: [],
  loading: false,
  token: localStorage.getItem("token"),
  isAuth: false,
  products: [],
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: [],
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        error: [],
        isAuth: true,
        token: payload.token,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: [],
        user: payload,
      };
      case LOGOUT:
        return{
            ...state,user:[],error:[],
            isAuth:false,
        }
    default:
      return state;
  }
};



