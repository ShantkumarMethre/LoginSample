import data from './data.json';
export default class DashboardService {
  static get = async () => {
    return Promise.resolve({
      success: true,
      data: data.user,
    });
  };
}
