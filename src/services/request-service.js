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

      if (!response.ok) {
        const json = await response.json();
        return json.message;
      }

    } catch (err) {
      console.log(err);
    }
  }
}

const requestService = new RequestService();

export default requestService;