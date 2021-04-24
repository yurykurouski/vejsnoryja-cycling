class RequestService {
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();

      if (!response.ok) {
        
        return json.message;
      } else if (json.token) {
        
        return json
      }

    } catch (err) {
      console.log(err);
    }
  }
}

const requestService = new RequestService();

export default requestService;