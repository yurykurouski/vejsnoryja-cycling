import React from 'react';
import ValidationErrMsg from '../../../../../common/validation-err-msg/ValidationErrMsg';

export default function EventTitle(props) {
  const { onChange, value, errors, touched } = props;

  return (
    <label>
      Event title*

      <input
        onChange={onChange}
        name='title'
        type='text'
        value={value}
        autoFocus
      />

      {(errors && touched) ? (
        <ValidationErrMsg errorMsg={errors} />
      ) : null}
    </label>
  )
}
