import React from 'react';

export default function EventDescription(props) {
  const { onChange, value } = props;

  return (
    <label className="input__label">
      Description

      <textarea
        name="description"
        onChange={onChange}
        value={value}
        className="form__input form__input_description"
      />

    </label>
  );
}
