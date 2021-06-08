import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function EventAdress({
  onChange,
  value,
  errors,
  touched,
}) {
  return (
    <label className="input__label" htmlFor="adress">
      Meet-up adress*

      <input
        name="adress"
        id="adress"
        type="text"
        onChange={onChange}
        value={value}
        className="form__input form__input_adress"
      />

      {(errors && touched) && <ValidationErrMsg errorMsg={errors} />}
    </label>
  );
}

EventAdress.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  touched: PropTypes.object.isRequired,
};
