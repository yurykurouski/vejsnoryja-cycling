import React from 'react';
import PropTypes from 'prop-types';

import ValidationErrMsg from '../validation-err-msg/ValidationErrMsg';

import './input.css';

export default function Input({
  title,
  name,
  type,
  value,
  options,
  customInputClass,
  customLabelClass,
  handleChange,
  error,
  ...rest
}) {
  return (
    <label className={`${ customLabelClass }input__label`} htmlFor={title}>
      {title}

      {options
        ? <select
            name={name}
            type={type}
            id={title}
            onBlur={handleChange}
            value={value}
            className={`${ customInputClass } form__input`}
            {...rest}
        >
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>

        : <input
            name={name}
            type={type}
            onChange={handleChange}
            value={value}
            className={`${ customInputClass } form__input`}
            {...rest}
        />}
      {error && <ValidationErrMsg errorMsg={error} />}
    </label>
  );
}

Input.defaultProps = {
  customInputClass: '',
  customLabelClass: '',
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  customInputClass: PropTypes.string,
  customLabelClass: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
