import requestService from './request-service.js';
import {REGISTRATION_URL} from '../constants';

class AuthService{
  constructor(requestService) {
    this.requestService = requestService
  }
  async userRegister(data) {
    try {
      const result = await requestService.post(REGISTRATION_URL, data);
      
      return await result;
    } catch (err) {
      throw console.error(err.message);
    }
  }
}

const authService = new AuthService();

export default authService;