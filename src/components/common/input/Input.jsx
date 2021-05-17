import React from 'react';
import './input.css';

export default function Input({title, name, onChange, value}) {
  return (
    <label className="input__label">
      {title}

      <input
        name='distance'
        type='text'
        onChange={onChange}
        value={value}
        className="form__input"
      />
    </label>
  )
}
