import {
  SET_TAB,
} from './actions';
import { SUBTITLE_TAB } from '../constant';

const reducer = (state = {
  subtitleTab: SUBTITLE_TAB.ALL,
}, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        subtitleTab: action.tabValue,
      };

    default:
      return state;
  }
};

export default reducer;