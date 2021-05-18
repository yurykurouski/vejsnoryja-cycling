import React from 'react';
import ValidationErrMsg from "../validation-err-msg/ValidationErrMsg";
import './input.css';

export default function Input(props) {
  const { title, name, type, value, options, customInputClass = '', customLabelClass = '', handleChange, error } = props;
  
  return (
    <label className={`${customLabelClass}input__label`}>
      {title}

      {options
        ? <select
          name={name}
          type={type}
          onChange={handleChange}
          value={value}
          className={`${customInputClass} form__input`}
        > {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
        </select>

        : <input
          name={name}
          type={type}
          onChange={handleChange}
          value={value}
          className={`${customInputClass} form__input`}
        />
      }
      {error ? (
         <ValidationErrMsg errorMsg={error} />
      ) : null}

    </label>
  )
}


