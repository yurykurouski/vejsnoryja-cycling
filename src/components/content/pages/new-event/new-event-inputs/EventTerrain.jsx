import React from 'react'

export default function EventTerrain(props) {
  const { onChange, value } = props;

  return (
    <label>
      Terrain

      <select
        name='terrain'
        type='text'
        value={value}
        onChange={onChange}
      >

        <option value="mostly-flat">Mostly Flat</option>
        <option value="gravel">Gravel</option>
        <option value="rolling-hills">Rolling Hills</option>
        <option value="killer-Climbs">Killer Climbs</option>
      </select>
    </label>
  )
}
