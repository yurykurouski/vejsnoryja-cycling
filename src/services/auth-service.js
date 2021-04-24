import requestService from './request-service.js';
import { REGISTRATION_URL } from '../constants';
import sha3 from 'crypto-js/sha256';

class AuthService {
  constructor(requestService) {
    this.requestService = requestService
  }
  async userRegister(data) {
    const encryptedData = {
      email: data.email,
      password: sha3(data.password).toString(),
      repeatPass: sha3(data.repeatPass).toString(),
    }

    try {
      const result = await requestService.post(REGISTRATION_URL, encryptedData);

      return await result;
    } catch (err) {
      throw console.error(err.message);
    }
  }
}

const authService = new AuthService();

export default authService;