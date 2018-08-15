import { ADD_USER, DELETE_USER, EDIT_USER } from '../actions/types';

const initialState = [
  {
    name: 'Default User',
    phone: '8(800)555-35-35',
    email: 'defaultUser@react.js',
  },
];

export default function (state = initialState, action) {
  const newState = state;
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    case DELETE_USER:
      return [...state.filter((item, idx) => idx !== action.id)];
    case EDIT_USER:
      newState[action.id] = action.data;
      return [...newState];
    default:
      return state;
  }
}
