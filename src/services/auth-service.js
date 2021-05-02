import ContentType from "../constants/content-type.js";
import requestService from './request-service.js';

class AuthService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async userRegister(data) {
    const result = await requestService.post(process.env.REACT_APP_REGISTRATION_URL, data)
      .then((response) => {
        return response;
      });

    return result;
  }

  async userLogin(data) {
    const result = await requestService.post(process.env.REACT_APP_LOGIN_URL, data)
      .then((response) => {
        return response;
      });

    return result;
  }

  async userAuth() {
    const token = localStorage.getItem('token');

    const result = fetch(process.env.REACT_APP_AUTH_URL, {
      method: 'GET',
      headers: {
        'Content-Type': ContentType.APPLICATION_JSON,
        Accept: ContentType.APPLICATION_JSON,
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