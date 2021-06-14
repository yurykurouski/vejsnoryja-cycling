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
}
