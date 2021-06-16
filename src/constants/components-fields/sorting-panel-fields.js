export default class SortingPanelFields {
  static get INPUT_TYPE() {
    return {
      title: 'Sort by',
      name: 'sorting-type',
      value: '',
      type: 'select',
      options: this.INPUT_OPTIONS,
    };
  }

  static get INPUT_OPTIONS() {
    return [
      'Date: Ascending',
      'Date: Descending',
      'Distance: Ascending',
      'Distance: Descending',
    ];
  }

  static get FILTERS() {
    return [
      {
        type: 'terrain',
        value: 'Mostly flat',
      },
      {
        type: 'terrain',
        value: 'Gravel',
      },
      {
        type: 'terrain',
        value: 'Rolling hills',
      },
      {
        type: 'terrain',
        value: 'Killer Climbs',
      },
      {
        type: 'level',
        value: 'Casual',
      },
      {
        type: 'level',
        value: 'Tempo',
      },
      {
        type: 'level',
        value: 'Race',
      },
    ];
  }
}
