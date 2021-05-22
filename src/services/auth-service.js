import requestService from './request-service.js';

class AuthService {
  async userRegister(data) {
    try {
      const response = await requestService.post(process.env.REACT_APP_REGISTRATION_URL, data);

      if (response.message) {
        throw new Error(response.message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async userLogin(data) {
    try {
      const result = await requestService.post(process.env.REACT_APP_LOGIN_URL, data);

      if (result.token) {
        localStorage.setItem('token', result.token);

      } else if (result) {
        throw new Error(result.message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async userAuth() {
    try {
      const result = await requestService.getSecured(process.env.REACT_APP_AUTH_URL);

      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const authService = new AuthService();

export default authService;