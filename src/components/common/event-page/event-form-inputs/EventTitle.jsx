import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function EventTitle({
  onChange,
  value,
  errors,
  touched,
}) {
  return (
    <label className="input__label title-label" htmlFor="title">
      Event title*

      <input
        onChange={onChange}
        name="title"
        type="text"
        id="title"
        value={value}
        className="form__input form__input_title"
      />

      {(errors && touched) && <ValidationErrMsg errorMsg={errors} />}
    </label>
  );
}

EventTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  touched: PropTypes.object.isRequired,
};
