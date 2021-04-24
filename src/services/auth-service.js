import requestService from './request-service.js';
import { REGISTRATION_URL, LOGIN_URL } from '../constants';

class AuthService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async userRegister(data) {
    const result = await requestService.post(REGISTRATION_URL, data)
      .then((response) => {
        return response;
      });

    return result;
  }

  async userLogin(data) {
    const result = await requestService.post(LOGIN_URL, data)
      .then((response) => {
        return response;
      });

    return result;
  }
}

const authService = new AuthService();

export default authService;