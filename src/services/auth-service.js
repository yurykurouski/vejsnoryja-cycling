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

  async changeEmail(data) {
    try {
      const response = await requestService.patchSecured(process.env.REACT_APP_API_CHANGE_USER_EMAIL_SETTINGS_URL, data);

      if (response.message) {
        throw new Error(response.message);
      }

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
  // TODO нужно будет обьединить методы
  async changePassword(data) {
    try {
      const response = await requestService.patchSecured(process.env.REACT_APP_API_CHANGE_USER_PASSWORD_SETTINGS_URL, data);
      if (response.message) {
        throw new Error(response.message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

const authService = new AuthService();

export default authService;