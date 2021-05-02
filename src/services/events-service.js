import requestService from './request-service.js';

class EventsService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async createEvent(data) {
    const result = await requestService.postSecured(process.env.REACT_APP_API_NEW_EVENT_URL, data)
      .then((response) => {
        return response;
      });

    return result;
  }
}

const eventService = new EventsService();

export default eventService;