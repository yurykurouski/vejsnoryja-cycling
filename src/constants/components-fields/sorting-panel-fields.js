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
        icon: 'mostlyFlatIcon',
      },
      {
        type: 'terrain',
        value: 'Gravel',
        icon: 'gravelIcon',
      },
      {
        type: 'terrain',
        value: 'Rolling hills',
        icon: 'rollingHillsIcon',
      },
      {
        type: 'terrain',
        value: 'Killer Climbs',
        icon: 'killerKlimbIcon',
      },
      {
        type: 'level',
        value: 'Casual',
        icon: 'casualIcon',
      },
      {
        type: 'level',
        value: 'Tempo',
        icon: 'tempoIcon',
      },
      {
        type: 'level',
        value: 'Race',
        icon: 'raceIcon',
      },
    ];
  }
}
