import React from 'react';
import PropTypes from 'prop-types';

export default function EventDescription({
  onChange,
  value,
}) {
  return (
    <label className="input__label" htmlFor="description">
      Description

      <textarea
        name="description"
        id="description"
        onChange={onChange}
        value={value}
        className="form__input form__input_description"
      />

    </label>
  );
}

EventDescription.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
