export default class ActionStatus {
  static get IDLE() {
    return 'idle';
  }

  static get LOADING() {
    return 'loading';
  }

  static get SUCCEDED() {
    return 'succeded';
  }

  static get FAILED() {
    return 'failed';
  }
}