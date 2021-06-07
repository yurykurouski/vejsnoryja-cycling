import React from 'react';

export default function EventDate(props) {
  const { onChange, value } = props;

  return (
    <label className="input__label">
      Start Date/Time*

      <input
        name="date"
        type="datetime-local"
        step="0"
        id="meeting-time"
        value={value}
        onChange={onChange}
        className="form__input form__input_date"
      />
    </label>
  );
}
