import React from 'react';

import ValidationErrMsg from '../../validation-err-msg/ValidationErrMsg';

export default function EventAdress(props) {
  const { onChange, value, errors, touched } = props;

  return (
    <label className="input__label">
      Meet-up adress*

      <input
        name="adress"
        type="text"
        onChange={onChange}
        value={value}
        className="form__input form__input_adress"
      />

      {(errors && touched) ? (
        <ValidationErrMsg errorMsg={errors} />
      ) : null}
    </label>
  );
}
