import AuthStore from "../types/AuthStore";
import { getValue } from "../utils/lodash";

export const LOADING = "auth/LOADING";
export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";
export const REQUEST_ERROR = "auth/REQUEST_ERROR";

const userHydrate = (): object => {
  const user: string = localStorage.getItem("user") || "{}";
  return JSON.parse(user);
};

const initialState: AuthStore = {
  user: userHydrate(),
  errorMessage: null,
  isLoading: false,
  access_token: null,
  refresh_token:null,
  session_state:null,
  token_type:null,
  scope:null,

};

const AuthReducer = (state = initialState, action: any): AuthStore => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case LOGIN:
      localStorage.setItem(
        "access_token",
        (getValue(action, `payload.data.data.access_token`, ""))
      );
      localStorage.setItem(
        "refresh_token",
        (getValue(action, `payload.data.data.refresh_token`, ""))
      );
      localStorage.setItem(
        "session_state",
        (getValue(action, `payload.data.data.session_state`, ""))
      );
      localStorage.setItem(
        "token_type",
        (getValue(action, `payload.data.data.token_type`, ""))
      );

      localStorage.setItem(
        "scope",
        (getValue(action, `payload.data.data.scope`, ""))
      );
      window.location.href = '/input-module/dashboard'

      return {
        ...state,
        user: action.payload.data.data.user,
        access_token: (getValue(action, `payload.data.data.access_token`, "")),
		    refresh_token: (getValue(action, `payload.data.data.refresh_token`, "")),
        session_state: (getValue(action, `payload.data.data.session_state`, "")),
        token_type: (getValue(action, `payload.data.data.token_type`, "")),
        scope: (getValue(action, `payload.data.data.scope`, "")),
        isLoading: false,
      };
    case LOGOUT:
      localStorage.clear();
      window.location.href = '/input-module/login'
      return {
        ...state,
        user: null,
		access_token: null,
		refresh_token:null,
		session_state:null,
		token_type:null,
		scope:null,
        errorMessage: null,
        isLoading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
