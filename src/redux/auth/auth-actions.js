import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

export const registerActions = {
  registerRequest,
  registerSuccess,
  registerError,
};

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

export const loginActions = {
  loginRequest,
  loginSuccess,
  loginError,
};

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

export const logoutActions = {
  logoutRequest,
  logoutSuccess,
  logoutError,
};

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

export const getCurrentUserActions = {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
