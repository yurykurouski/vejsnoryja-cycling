import SettingsFields from "../constants/settings-fields.js";

export function makeInputTemplateFromState(filtered) {
  let res = [];

  for (let key in filtered) {
    if (!SettingsFields.FIELDS_FILTER.includes(key)) {
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