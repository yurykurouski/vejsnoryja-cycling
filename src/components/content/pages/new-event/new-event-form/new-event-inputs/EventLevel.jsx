import React from 'react'

export default function EventLevel(props) {
  const { onChange, value } = props;

  return (
    <label>
      Level/Event type

      <select
        name='level'
        type='text'
        value={value}
        onChange={onChange}
      >

        <option value="casual">Csual/No Drop</option>
        <option value="tempo">Tempo</option>
        <option value="race">Race Pace</option>
      </select>
    </label>
  )
}
