class RequestService {
  async post(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw Error(response.status);
    }

    const json = await response;

    return json;
  }
}

const requestService = new RequestService();

export default requestService;