import { handleActions } from 'redux-actions';

import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_EDIT_SUCCESS,
} from './action';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  img: [],
};

export default handleActions(
  {
    [USER_SIGNUP_SUCCESS]: (state, action) => action.payload,
    [USER_LOGIN_SUCCESS]: (state, action) => state,
    [USER_LOGOUT_SUCCESS]: (state, action) => state,
    [USER_EDIT_SUCCESS]: (state, action) => state,
  },
  initialState,
);
