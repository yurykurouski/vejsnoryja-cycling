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

  async getEventsByUser(id) {
    try {
      const response = await requestService.getSecured(`${ process.env.REACT_APP_API_GET_EVENTS_BY_USER_URL }${ id }`);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateEventById(id) {
    try {
      const response = await requestService.putSecured(process.env.REACT_APP_API_UPDATE_EVENT_BY_ID, id);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteEventById(id) {
    try {
      const response = await requestService.deleteSecured(`${ process.env.REACT_APP_API_DELETE_EVENT_BY_ID }${ id }`);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async userInEvent(data) {
    try {
      const response = await requestService.patchSecured(process.env.REACT_APP_API_EVENT_USER_IN, data);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const eventService = new EventsService();

export default eventService;