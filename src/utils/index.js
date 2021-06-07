/* eslint-disable */
import Gear from '../constants/gear/gear-helper';
import SettingsFields from '../constants/components-fields/settings-fields';

export default function makeInputTemplateFromState(filtered) {
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
