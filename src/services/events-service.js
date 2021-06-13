import requestService from './request-service';

export default class EventsService {
  static async createEvent(data) {
    try {
      return requestService.postSecured(process.env.REACT_APP_API_NEW_EVENT_URL, data);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getAllEvents(items) {
    try {
      return await requestService.getSecured(`${ process.env.REACT_APP_API_GET_ALL_EVENTS_URL }${ items }`);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getEventsByUser(query) {
    try {
      return await requestService.getSecured(`${ process.env.REACT_APP_API_GET_EVENTS_BY_USER_URL }${ query.userId }&items=${ query.eventsQuanity }`);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async updateEventById(id) {
    try {
      return await requestService.putSecured(process.env.REACT_APP_API_UPDATE_EVENT_BY_ID, id);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async deleteEventById(id) {
    try {
      return await requestService.deleteSecured(`${ process.env.REACT_APP_API_DELETE_EVENT_BY_ID }${ id }`);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async userInOutEvent(data) {
    try {
      return await requestService.patchSecured(process.env.REACT_APP_API_EVENT_USER_IN_OUT, data);
    } catch (err) {
      throw new Error(err);
    }
  }
}
