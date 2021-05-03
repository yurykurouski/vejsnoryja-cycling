import React from 'react';
import ValidationErrMsg from '../../../../../common/validation-err-msg/ValidationErrMsg';

export default function EventAdress(props) {
  const { onChange, value, errors, touched } = props;

  return (
    <label>
      Meet-up adress*

      <input
        name='adress'
        type='text'
        onChange={onChange}
        value={value}
      />

      {(errors && touched) ? (
        <ValidationErrMsg errorMsg={errors} />
      ) : null}
    </label>
  )
}
