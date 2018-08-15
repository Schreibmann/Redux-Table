import { ADD_USER, DELETE_USER, EDIT_USER } from './types';

export const addUser = user => (dispatch) => {
  dispatch({
    type: ADD_USER,
    user,
  });
};


export const deleteUser = id => (dispatch) => {
  dispatch({
    type: DELETE_USER,
    id,
  });
};

export const editUser = (id, data) => (dispatch) => {
  dispatch({
    type: EDIT_USER,
    id,
    data,
  });
};
