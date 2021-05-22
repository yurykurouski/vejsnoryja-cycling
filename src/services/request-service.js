import ContentType from "../constants/content-type";
import HttpMethod from '../constants/http-method';

class RequestService {
  constructor() {
    this.token = localStorage.getItem('token');
    this.response = async (url, method, data) => {
      return await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON,
          'Authorization': this.token,
        }
      });
    }
  }

  async getSecured(url) {
    try {
      const response = await fetch(url, {
        method: HttpMethod.GET,
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON,
          'Authorization': this.token
        },
      });

      const json = response.json();

      return json;
    } catch (err) {
      throw new Error(err);
    }
  }

  async get(url) {
    try {
      const response = await fetch(url, {
        method: HttpMethod.GET,
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON,
        }
      });

      const json = response.json();

      return json;
    } catch (err) {
      throw new Error(err);
    }
  }

  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: HttpMethod.POST,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON
        }
      });

      const json = await response.json();

      return json;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async postSecured(url, data) {
    try {
      const response = await fetch(url, {
        method: HttpMethod.POST,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": ContentType.APPLICATION_JSON,
          'Authorization': this.token
        },
      });

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
      const response = await fetch(url, {
        method: HttpMethod.PUT,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": ContentType.APPLICATION_JSON,
          'Authorization': this.token
        },
      });

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