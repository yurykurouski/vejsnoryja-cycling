import requestService from './request-service.js';

class SettingsService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async getUserInfo(id) {
    try {
      const response = await requestService.getSecured(`${process.env.REACT_APP_API_SETTINGS_MY_PROFILE_URL}${id}`);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateUserInfo(field) {
    try {
      const response = await requestService.putSecured(process.env.REACT_APP_API_UPDATE_SETTINGS_MY_PROFILE_URL, field);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async addNewGear(data) {
    try {
      const response = await requestService.postSecured(process.env.REACT_APP_API_ADD_NEW_GEAR_SETTINGS_URL, data);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const settingsService = new SettingsService();

export default settingsService;