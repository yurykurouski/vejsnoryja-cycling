export default class SettingsFields {
  static get FIELDS_OPTIONS() {
    return ['Road bike', 'Mountain bike', 'Cross bike', 'Gravel'];
  }

  static get SETTINGS_TABS() {
    return [
      {
        to: '/settings/my-profile',
        name: 'My Profile',
      },

      {
        to: '/settings/my-gear',
        name: 'My Gear',
      },

      {
        to: '/settings/my-account',
        name: 'My Account',
      },
    ];
  }

  static get ADD_BIKE() {
    return [
      {
        title: 'Name',
        name: 'name',
        value: '',
        type: 'text',
      },
      {
        title: 'Types',
        name: 'types',
        value: 'Road bike',
        options: this.FIELDS_OPTIONS,
        type: 'select',
      },
      {
        title: 'Weight',
        name: 'weight',
        value: '',
        type: 'text',
      },
      {
        title: 'Brand',
        name: 'brand',
        value: '',
        type: 'text',
      },
      {
        title: 'Model',
        name: 'model',
        value: '',
        type: 'text',
      },
      {
        title: 'Notes',
        name: 'notes',
        value: '',
        type: 'textfield',
      },
    ];
  }

  static get TABLE_COLUMNS() {
    return [
      {
        title: 'Active',
        align: 'left',
      },
      {
        title: 'Bike name',
        align: 'center',
      },
      {
        title: 'Action',
        align: 'right',
      },
    ];
  }
}
