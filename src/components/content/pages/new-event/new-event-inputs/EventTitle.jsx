import React from 'react'

export default function EventTitle(props) {
  const { onChange, value } = props;

  return (
    <label>
      Event title*

      <input
        onChange={onChange}
        name='title'
        type='text'
        value={value}
        autoFocus
      />
    </label>
  )
}
