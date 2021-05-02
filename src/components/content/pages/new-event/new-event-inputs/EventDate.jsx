import React from 'react'

export default function EventDate(props) {
  const { onChange, value } = props;

  return (
    <label>
      Start Date/Time*

      <input
        name="date"
        type="datetime-local"
        id="meeting-time"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
