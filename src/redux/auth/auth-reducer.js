import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerActions,
  loginActions,
  logoutActions,
  getCurrentUserActions,
} from "./auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerActions.registerSuccess]: (_, { payload }) => payload.user,
  [loginActions.loginSuccess]: (_, { payload }) => payload.user,
  [logoutActions.logoutSuccess]: () => initialUserState,
  [getCurrentUserActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerActions.registerSuccess]: (_, { payload }) => payload.token,
  [loginActions.loginSuccess]: (_, { payload }) => payload.token,
  [logoutActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerActions.registerError]: setError,
  [loginActions.loginError]: setError,
  [logoutActions.logoutError]: setError,
  [getCurrentUserActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerActions.registerSuccess]: () => true,
  [loginActions.loginSuccess]: () => true,
  [getCurrentUserActions.getCurrentUserSuccess]: () => true,
  [registerActions.registerError]: () => false,
  [loginActions.loginError]: () => false,
  [getCurrentUserActions.getCurrentUserError]: () => false,
  [logoutActions.logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});

export default authReducer;
