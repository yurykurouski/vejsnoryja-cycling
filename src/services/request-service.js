import ContentType from "../constants/content-type";
import HttpMethod from '../constants/http-method';

class RequestService {
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

      if (!response.ok) {
        
        return json.message;
      } else if (json.token) {
        return json;
      }

    } catch (err) {
      console.log(err);
    }
  }

  async postSecured(url, data) {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(url, {
        method: HttpMethod.POST,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": ContentType.APPLICATION_JSON,
          'Authorization': token
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