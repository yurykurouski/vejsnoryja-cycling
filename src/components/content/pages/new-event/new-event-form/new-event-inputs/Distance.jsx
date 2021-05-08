import React from 'react';
import ValidationErrMsg from '../../../../../common/validation-err-msg/ValidationErrMsg';


export default function Distance(props) {
  const { onChange, value, errors, touched } = props;

  return (
    <label className="input__label">
      Distance (km)

      <input
        name='distance'
        type='text'
        onChange={onChange}
        value={value}
        className="form__input form__input_distance"
      />

      {(errors && touched) ? (
        <ValidationErrMsg errorMsg={errors} />
      ) : null}
    </label>
  )
}
