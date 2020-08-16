import * as ActionTypes from './types';
import AuthService from '../service/authService';
export const login = (data) => async (dispatch, getState) => {
  const response = await AuthService.login(data);
  if (response.success) {
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response.userName,
    });
    return;
  }

  dispatch({
    type: ActionTypes.LOGIN_FAILURE,
    payload: response.error_description,
  });
};
