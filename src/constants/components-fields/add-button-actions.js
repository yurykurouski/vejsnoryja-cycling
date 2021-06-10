export default class AddButtonActions {
  static get ACTIONS() {
    return [
      {
        name: 'New event',
        type: 'edit',
        linkTo: 'new-event',
      },
    ];
  }
}
