import {SAVE_SEARCH_HISTORY_SUCCESS} from '../actions/actionTypes';

const initialState = {
  searches: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_HISTORY_SUCCESS:
      return {
        ...state,
        searches: [...state.searches, action.payload],
      };
    default:
      return state;
  }
};

export default searchReducer;
