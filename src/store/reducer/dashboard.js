import * as ActionTypes from '../../action/types';

const initialState = {
  users: [],
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
