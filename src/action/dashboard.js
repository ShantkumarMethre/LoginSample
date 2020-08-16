import * as ActionTypes from './types';
import DashboardService from '../service/dashbordService';
export const getUsers = () => async (dispatch, getState) => {
  const response = await DashboardService.get();
  if (response.success) {
    dispatch({
      type: ActionTypes.GET_USERS,
      payload: response.data,
    });
    return;
  }
};
