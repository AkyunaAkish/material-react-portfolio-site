import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
