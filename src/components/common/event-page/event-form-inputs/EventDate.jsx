import React from 'react';
import PropTypes from 'prop-types';

export default function EventDate({
  onChange,
  value,
}) {
  return (
    <label className="input__label" htmlFor="meeting-time">
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

EventDate.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
