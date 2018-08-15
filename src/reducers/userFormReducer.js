import {
  SHOW_FORM,
  CLOSE_FORM,
  SET_FORM_MODE,
  SET_CURRENT_USER,
} from '../actions/types';

const initialState = {
  visible: false,
  mode: 'idle',
  currentUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        visible: true,
      };
    case CLOSE_FORM:
      return {
        ...state,
        visible: false,
      };
    case SET_FORM_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
}
