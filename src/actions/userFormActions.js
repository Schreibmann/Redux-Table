import {
  SHOW_FORM,
  CLOSE_FORM,
  SET_FORM_MODE,
  SET_CURRENT_USER,
} from './types';

export const showForm = () => (dispatch) => {
  dispatch({
    type: SHOW_FORM,
  });
};


export const closeForm = () => (dispatch) => {
  dispatch({
    type: CLOSE_FORM,
  });
};

export const setFormMode = mode => (dispatch) => {
  dispatch({
    type: SET_FORM_MODE,
    mode,
  });
};

export const setCurrentUser = user => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    user,
  });
};
