import React from 'react';
import PropTypes from 'prop-types';

export default function EventLevel({
  onChange,
  value,
}) {
  return (
    <label className="input__label" htmlFor="level">
      Level/Event type

      <select
        name="level"
        type="text"
        id="level"
        value={value}
        onChange={onChange}
        className="form__input form__input_level"
      >

        <option value="Casual">Casual/No Drop</option>
        <option value="Tempo">Tempo</option>
        <option value="Race">Race Pace</option>
      </select>
    </label>
  );
}

EventLevel.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
