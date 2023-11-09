import {put, all, takeLatest} from 'redux-saga/effects';
import {
  SAVE_SEARCH_HISTORY_SUCCESS,
  SAVE_SEARCH__HISTORY_REQUEST,
} from '../actions/actionTypes';

function* saveSearches(action) {
  const {payload} = action;
  yield put({type: SAVE_SEARCH_HISTORY_SUCCESS, payload: payload});
}

function* watchSaveSearches() {
  yield takeLatest(SAVE_SEARCH__HISTORY_REQUEST, saveSearches);
}

export default function* sagasRoot() {
  yield all([watchSaveSearches()]);
}
