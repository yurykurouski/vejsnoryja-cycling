import React from 'react'

export default function EventAdress(props) {
  const { onChange, value } = props;

  return (
    <label>
      Meet-up adress*

      <input
        name='adress'
        type='text'
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
