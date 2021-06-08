import requestService from './request-service';

export default class SettingsService {
  static async getUserInfo(id) {
    try {
      return await requestService.getSecured(
        `${process.env.REACT_APP_API_SETTINGS_MY_PROFILE_URL}${id}`,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async updateUserInfo(field) {
    try {
      return await requestService.putSecured(
        process.env.REACT_APP_API_UPDATE_SETTINGS_MY_PROFILE_URL, field,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async addNewGear(data) {
    try {
      return await requestService.postSecured(
        process.env.REACT_APP_API_ADD_NEW_GEAR_SETTINGS_URL, data,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getUserGear() {
    try {
      return await requestService.getSecured(process.env.REACT_APP_API_GET_USER_GEAR_SETTINGS_URL);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getUserActiveGear(id) {
    try {
      return await requestService.getSecured(
        `${process.env.REACT_APP_API_GET_GEAR_BY_USER_URL}${id}`,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async setActiveGear(data) {
    try {
      return await requestService.putSecured(
        process.env.REACT_APP_API_GET_USER_GEAR_SETTINGS_URL, data,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async deleteGear(id) {
    try {
      return await requestService.deleteSecured(
        `${process.env.REACT_APP_API_DELETE_USER_GEAR_SETTINGS_URL}${id}`,
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  static async editGear(data) {
    try {
      return await requestService.patchSecured(
        process.env.REACT_APP_API_EDIT_USER_GEAR_SETTINGS_URL, data,
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
