import requestService from './request-service.js';

class EventsService {
  async createEvent(data) {
    try {
      requestService.postSecured(process.env.REACT_APP_API_NEW_EVENT_URL, data);

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllEvents() {
    try {
      const response = await requestService.get(process.env.REACT_APP_API_GET_ALL_EVENTS_URL);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getEventsByUser() {
    try {
      const response = await requestService.getSecured(process.env.REACT_APP_API_GET_EVENTS_BY_USER_URL);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateEventById(data) {
    try {
      const response = await requestService.putSecured(process.env.REACT_APP_API_UPDATE_EVENT_BY_ID, data);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const eventService = new EventsService();

export default eventService;