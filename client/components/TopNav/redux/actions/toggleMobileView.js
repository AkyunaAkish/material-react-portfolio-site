import { TOGGLE_MOBILE_VIEW } from './types';

export default function(windowWidth) {
  return {
    type: TOGGLE_MOBILE_VIEW,
    payload: windowWidth
  };
};
