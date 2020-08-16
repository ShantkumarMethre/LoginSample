import * as ActionTypes from '../../action/types';

const initialState = {
  user: '',
  error: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        user: '',
      };
    default:
      return state;
  }
}
