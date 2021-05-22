export default class AddButtonActions {
  static get ACTIONS() {
    return [
      {
        name: 'Smthng',
        type: 'create_new_folder',
        linkTo: 'register',
      },
      {
        name: 'New event',
        type: 'edit',
        linkTo: 'new-event',
      }
    ]
  }
}