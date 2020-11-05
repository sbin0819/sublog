import { handleActions } from 'redux-actions';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_EDIT_SUCCESS,
} from './action';

const initialState = {
  username: '',
  phone: '',
  img: [],
  age: null,
  birth: null,
  posts: [],
  likes: [],
  comments: [],
};

export default handleActions(
  {
    [USER_LOGIN_SUCCESS]: (state, action) => state,
    [USER_LOGOUT_SUCCESS]: (state, action) => state,
    [USER_EDIT_SUCCESS]: (state, action) => state,
  },
  initialState,
);
