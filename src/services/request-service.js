import HttpMethod from '../constants/http-requests/http-method';
import ContentType from '../constants/http-requests/content-type';

class RequestService {
  constructor() {
    this.response = async (url, method, data) => {
      return await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON,
          'Authorization': localStorage.getItem('token'),
        }
      });
    }
  }

  async getSecured(url) {
    try {
      const response = await this.response(url, HttpMethod.GET);

      return response.json();;
    } catch (err) {
      throw new Error(err);
    }
  }

  async get(url) {
    try {
      const response = await this.response(url, HttpMethod.GET);

      return response.json();;
    } catch (err) {
      throw new Error(err);
    }
  }

  async post(url, data) {
    try {
      const response = await this.response(url, HttpMethod.POST, data);

      return response.json();;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async postSecured(url, data) {
    try {
      const response = await this.response(url, HttpMethod.POST, data);

      const json = await response.json();

      if (!response.ok) {

        return json.message;
      } else {
        return json;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async putSecured(url, data) {
    try {
      const response = await this.response(url, HttpMethod.PUT, data);

      return await response.json();
    } catch (err) {
      throw new Error(err)
    }
  }

  async deleteSecured(url) {
    try {
      const response = await this.response(url, HttpMethod.DELETE);

      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  async patchSecured(url, data) {
    try {
      const response = await this.response(url, HttpMethod.PATCH, data);

      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }
}

const requestService = new RequestService();

export default requestService;