import ContentType from "../constants/content-type";
import HttpMethod from '../constants/http-method';

class RequestService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  async getSecured(url) {
    try {
      const response = await fetch(url, {
        method: HttpMethod.GET,
        headers: {
          'Content-Type': ContentType.APPLICATION_JSON,
          'Authorization': this.token
        }
      });

      const json = response.json();

      return json;
    } catch (err) {
      throw Error(err);
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
      throw Error(err.message);
    }
  }

  async postSecured(url, data) {
    // const token = localStorage.getItem('token');

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
      } else if (json.token) {
        return json;
      }

    } catch (err) {
      console.log(err);
    }
  }
}

const requestService = new RequestService();

export default requestService;