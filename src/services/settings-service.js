import requestService from './request-service.js';

class SettingsService {
  constructor(requestService) {
    this.requestService = requestService
  }

  async getUserInfo(id) {
    // * не понял почему здесь с айди передеается вся инфа из стейта
    try {
      const response = await requestService.getSecured(`${process.env.REACT_APP_API_SETTINGS_MY_PROFILE_URL}${id}`);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const settingsService = new SettingsService();

export default settingsService;