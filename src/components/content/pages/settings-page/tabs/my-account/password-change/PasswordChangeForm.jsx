import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Input from '../../../../../../common/input/Input';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from '../../../../../../../constants';
import ValidationErrMsg from '../../../../../../common/validation-err-msg/ValidationErrMsg';

export default function PasswordChangeForm({ submitForm, authErrors }) {
  const validationSchema = Yup.object().shape({
    password: Yup
      .string()
      .required('You must enter your current password.'),
    newPassword: Yup
      .string()
      .min(8, `Password should contain at least ${ MIN_PASSWORD_LENGTH } characters`)
      .matches(PASSWORD_REGEX, 'Password invalid format.')
      .required('Password can not be empty.'),
    repeatPass: Yup
      .string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords does not match.')
  });

  const submitPasswordChange = async (data, actions) => {
    await submitForm(data);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ password: '', newPassword: '', repeatPass: '' }}
      onSubmit={submitPasswordChange}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form
          className="my-account__form first-layer-card_hovered"
          onSubmit={handleSubmit}
        >
          <Input
            name="password"
            type="password"
            title="Change Password"
            customInputClass="my-account__input"
            placeholder="Current password"
            value={values.password}
            onChange={handleChange}
          />

          {(errors.password && touched.password) || authErrors.password ? (
            <ValidationErrMsg errorMsg={errors.password || authErrors.password} />
          ) : null}

          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
            customInputClass="my-account__input"
            value={values.newPassword}
            onChange={handleChange}
          />

          {(errors.newPassword && touched.newPassword) ? (
            <ValidationErrMsg errorMsg={errors.newPassword} />
          ) : null}

          <Input
            name="repeatPass"
            type="password"
            placeholder="Confirm new password"
            customInputClass="my-account__input"
            value={values.repeatPass}
            onChange={handleChange}
          />

          {touched.repeatPass ? (
            <ValidationErrMsg errorMsg={errors.repeatPass} />
          ) : null}

          <button type="submit" className="my-account__submit-email-change submit-btn">Update</button>
        </form>
      )}
    </Formik>
  );
}
