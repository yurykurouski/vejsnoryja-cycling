import requestService from './request-service.js';

class EventsService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async createEvent(data) {
    try {
      requestService.postSecured(process.env.REACT_APP_API_NEW_EVENT_URL, data);
      
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getAllEvents() {
    try {
      const response = await requestService.get(process.env.REACT_APP_API_GET_ALL_EVENTS_URL);

      return response;
    } catch (err) {
      console.log(err)
    }
  }
}

const eventService = new EventsService();

export default eventService;