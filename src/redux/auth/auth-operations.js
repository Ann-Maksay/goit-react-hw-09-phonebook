import axios from "axios";

import {
  registerActions,
  loginActions,
  logoutActions,
  getCurrentUserActions,
} from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(registerActions.registerRequest());
  console.log(credentials);

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registerActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(registerActions.registerError(error.message));
  }
};

export const logIn = (credentials) => async (dispatch) => {
  dispatch(loginActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(loginActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(loginActions.loginError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutActions.logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutActions.logoutSuccess());
  } catch (error) {
    dispatch(logoutActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserActions.getCurrentUserError(error.message));
  }
};
