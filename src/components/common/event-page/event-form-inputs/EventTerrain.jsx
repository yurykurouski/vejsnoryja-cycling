import React from 'react';
import PropTypes from 'prop-types';

export default function EventTerrain({
  onChange,
  value,
}) {
  return (
    <label className="input__label" htmlFor="terrain">
      Terrain

      <select
        name="terrain"
        type="text"
        id="terrain"
        value={value}
        onChange={onChange}
        className="form__input form__input_terrain"
      >

        <option value="Mostly flat">Mostly Flat</option>
        <option value="Gravel">Gravel</option>
        <option value="Rolling hills">Rolling Hills</option>
        <option value="Killer Climbs">Killer Climbs</option>
      </select>
    </label>
  );
}

EventTerrain.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
