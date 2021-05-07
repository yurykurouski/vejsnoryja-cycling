import React from 'react';

export default function Distance(props) {
  const { onChange, value } = props;

  return (
    <label className="input__label">
      Distance

      <input
        name='distance'
        type='text'
        onChange={onChange}
        value={value}
        className="form__input form__input_distance"
      />
    </label>
  )
}
