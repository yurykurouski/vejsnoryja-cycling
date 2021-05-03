import React from 'react'

export default function EventDate(props) {
  const { onChange, value } = props;

  return (
    <label>
      Start Date/Time*

      <input
        name="date"
        type="datetime-local"
        step="01"
        id="meeting-time"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
