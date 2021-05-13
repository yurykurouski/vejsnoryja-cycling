import React from 'react';
import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function EventTitle(props) {
  const { onChange, value, errors, touched } = props;

  return (
    <label className="input__label title-label">
      Event title*

      <input
        onChange={onChange}
        name='title'
        type='text'
        value={value}
        className="form__input form__input_title"
        autoFocus
      />

      {(errors && touched) ? (
        <ValidationErrMsg errorMsg={errors} />
      ) : null}
    </label>
  )
}
