import React from 'react';

export default function EventTerrain(props) {
  const { onChange, value } = props;

  return (
    <label className="input__label">
      Terrain

      <select
        name='terrain'
        type='text'
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
  )
}
