import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './reducers/searchReducer';
import sagas from '../redux/sagas';

const rootReducer = combineReducers({
  searchReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
