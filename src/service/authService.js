export default class AuthService {
  static login = async (req) => {
    const user = {
      username: 'hruday@gmail.com',
      password: 'hruday123',
    };

    if (req.userName == user.username && req.password == user.password) {
      return Promise.resolve({success: true, userName: req.userName});
    }
    return Promise.resolve({
      success: false,
      error_description: 'enter correct userName and password',
    });
  };
}
