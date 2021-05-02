import React from 'react'

export default function EventDescription(props) {
  const { onChange, value } = props;

  return (
    <label>
      Description

      <textarea
        name="description"
        id=""
        cols="40"
        rows="5"
        onChange={onChange}
        value={value}
      />

    </label>
  )
}
