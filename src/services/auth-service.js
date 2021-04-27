import requestService from './request-service.js';
import { REGISTRATION_URL, LOGIN_URL, AUTH_URL } from '../constants';

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

  async userAuth() {
    const token = localStorage.getItem('token');

    const result = fetch(AUTH_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': token
      }
    }).then(response => {
      return response.json();
    })
      .then(data => {
        return data;
      })
      // .catch(localStorage.removeItem('token'));
    
    return await result;
  }
}

const authService = new AuthService();

export default authService;