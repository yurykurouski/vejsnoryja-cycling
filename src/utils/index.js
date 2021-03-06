/* eslint-disable */
import Gear from '../constants/gear/gear-helper';
import SettingsFields from '../constants/components-fields/settings-fields';

export default class Utils {
  static normalizeErrorMessage(message) {
    return message.split('Error: ')[1];
  }

  static makeInputTemplateFromState(filtered) {
    const res = [];

    for (const key in filtered) {
      if (!Gear.UNUSEFUL_FIELDS.includes(key)) {
        if (SettingsFields.FIELDS_OPTIONS.includes(filtered[key])) {
          res.push({
            name: key,
            title: key[0].toUpperCase() + key.substring(1),
            options: SettingsFields.FIELDS_OPTIONS,
            type: 'select',
            value: filtered[key]
          });
        } else {
          res.push({
            name: key,
            title: key[0].toUpperCase() + key.substring(1),
            type: 'text',
            value: filtered[key]
          });
        }
      }
    }

    return res;
  }

  static filterGearbyId(gear, id) {
    const filtered = gear.find((el) => el._id === id);

    return this.makeInputTemplateFromState(filtered);
  }

  static sortEventsBySortingType(events, sortingType) {
    switch (sortingType) {
      default:
      case 'Date: Ascending':
        return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

      case 'Date: Descending':
        return [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

      case 'Distance: Ascending':
        return [...events].sort((a, b) => a.distance - b.distance);

      case 'Distance: Descending':
        return [...events].sort((a, b) => b.distance - a.distance);
    }
  }

  static filterEvents(events, filters) {
    if (filters.length === 0) return events;

    const singleFilter = events.filter((event) => {
      return (filters.includes(event.terrain) || filters.includes(event.level));
    });

    const multiplyFilters = singleFilter.filter((event) => {
      return (filters.includes(event.level) && filters.includes(event.terrain));
    });

    return filters.includes('Race') || filters.includes('Tempo') || filters.includes('Casual') ? multiplyFilters : singleFilter;
  }

  static makeGMapsLink(coords) {
    return `https://www.google.com/maps/place/${ coords.lat },${ coords.lng }`;
  }
}
