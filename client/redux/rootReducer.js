import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import topNavReducer from '../components/TopNav/redux/reducers/topNav';

const rootReducer = combineReducers({
  form: formReducer,
  topNav: topNavReducer
});

export default rootReducer;
