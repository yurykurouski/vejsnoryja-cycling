export default class SettingsFields {
  static get ADD_BIKE() {
    return [
      {
        title: 'Name',
        name: 'name',
        value: '',
        type: 'text'
      },
      {
        title: 'Types',
        name: 'types',
        value: 'Road bike',
        options: ['Road bike', 'Mountain bike', 'Cross bike', 'Gravel'],
        type: 'select'
      },
      {
        title: 'Weight',
        name: 'weight',
        value: '',
        type: 'text'
      },
      {
        title: 'Brand',
        name: 'brand',
        value: '',
        type: 'text'
      },
      {
        title: 'Model',
        name: 'model',
        value: '',
        type: 'text'
      },
      {
        title: 'Notes',
        name: 'notes',
        value: '',
        type: 'textfield'
      },
    ]
  }
}