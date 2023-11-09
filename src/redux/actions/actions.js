import {SAVE_SEARCH__HISTORY_REQUEST} from './actionTypes';

export const saveSearchHistorySuccess = location => {
  return {
    type: SAVE_SEARCH__HISTORY_REQUEST,
    payload: location,
  };
};
