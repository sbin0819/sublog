import { createAction } from 'redux-actions';

export const USER_SIGNUP = 'user/USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'user/USER_SIGNUP_SUCCESS';

export const USER_LOGIN = 'user/USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'user/USER_LOGIN_SUCCESS';

export const USER_LOGOUT = 'user/USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'user/USER_LOGOUT_SUCCESS';

export const USER_EDIT = 'user/USER_EDIT';
export const USER_EDIT_SUCCESS = 'user/USER_EDIT_SUCCESS';

export const userSignupAction = createAction(USER_SIGNUP, (data) => data);

export const userLoginAction = createAction(USER_LOGIN, (data) => data);

export const userLogoutAction = createAction(USER_LOGOUT);
