import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function Distance({
  onChange,
  value,
  errors,
  touched,
}) {
  return (
    <label className="input__label" htmlFor="distance">
      Distance (km)

      <input
        name="distance"
        id="distance"
        type="text"
        onChange={onChange}
        value={value}
        className="form__input form__input_distance"
      />

      {(errors && touched) && <ValidationErrMsg errorMsg={errors} />}
    </label>
  );
}

Distance.defaultProps = {
  errors: undefined,
  touched: undefined,
};

Distance.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
