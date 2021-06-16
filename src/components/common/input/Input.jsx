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
    <label className={`${ customLabelClass } input__label`} htmlFor={title}>
      {title}

      {options
        ? <select
            name={name}
            type={type}
            id={title}
            onChange={handleChange}
            value={value}
            className={`${ customInputClass } form__input`}
            {...rest}
        >
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>

        : <input
            name={name}
            type={type}
            id={title}
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
  options: undefined,
  handleChange: undefined,
  error: undefined,
  title: undefined,
};

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  customInputClass: PropTypes.string,
  customLabelClass: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};
