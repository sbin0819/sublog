import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import sample, { sampleSaga } from './sample';

const rootReducer = combineReducers({
  sample,
});

export function* rootSaga() {
  yield all([sampleSaga()]);
}

export default rootReducer;
