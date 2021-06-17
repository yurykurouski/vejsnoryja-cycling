import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function EventDate({
  onChange,
  value,
  errors,
  touched,
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

      {(errors && touched) && <ValidationErrMsg errorMsg={errors} />}
    </label>
  );
}

EventDate.defaultProps = {
  errors: undefined,
  touched: undefined,
};

EventDate.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
