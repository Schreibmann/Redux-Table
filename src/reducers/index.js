import { combineReducers } from 'redux';
import editUserFormReducer from './editUserFormReducer';
import userFormReducer from './userFormReducer';

export default combineReducers({
  userList: editUserFormReducer,
  userForm: userFormReducer,
});
