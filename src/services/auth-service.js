import requestService from './request-service.js';

class AuthService {
  async userRegister(data) {
    try {
      const response = await requestService.post(process.env.REACT_APP_REGISTRATION_URL, data);

      if (response.message) {
        throw new Error(response.message);
      } else if (response.token) {
        localStorage.setItem('token', response.token);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async userLogin(data) {
    try {
      const response = await requestService.post(process.env.REACT_APP_LOGIN_URL, data);

      if (response.token) {
        localStorage.setItem('token', response.token);

      } else if (response) {
        throw new Error(response.message);
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