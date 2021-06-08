import requestService from './request-service';

class AuthService {
  static async userRegister(data) {
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

  static async userLogin(data) {
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

  static async userAuth() {
    try {
      return await requestService.getSecured(process.env.REACT_APP_AUTH_URL);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async changeEmail(data) {
    try {
      const response = await requestService.patchSecured(
        process.env.REACT_APP_API_CHANGE_USER_EMAIL_SETTINGS_URL, data,
      );

      if (response.message) {
        throw new Error(response.message);
      }

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  // TODO нужно будет обьединить методы
  static async changePassword(data) {
    try {
      const response = await requestService.patchSecured(
        process.env.REACT_APP_API_CHANGE_USER_PASSWORD_SETTINGS_URL, data,
      );
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
