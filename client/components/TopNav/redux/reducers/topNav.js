import { TOGGLE_MOBILE_VIEW } from '../actions/types';

let initialState = {
  showMobileView: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_VIEW:
      return { ...state, showMobileView: action.payload < 700 };
    default:
      return { ...state };
  }
};
