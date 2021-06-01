import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Input from '../../../../../../common/input/Input';
import ValidationErrMsg from '../../../../../../common/validation-err-msg/ValidationErrMsg';

export default function EmailChangeForm({ submitForm, userEmail, authErrors }) {
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Email invalid format.')
      .required('Email cannot be empty.'),
    password: Yup
      .string()
      .required('Password can not be empty.'),
  });

  const submitEmailChange = async (data) => {
    await submitForm(data);
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', }}
      onSubmit={submitEmailChange}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form
          className="my-account__form second-layer-card"
          onSubmit={handleSubmit}
        >
          <Input
            name='email'
            type='text'
            title='Change Email Address'
            customInputClass="my-account__input"
            placeholder={userEmail}
            value={values.email}
            onChange={handleChange}
          />

          {(errors.email && touched.email) ? (
            <ValidationErrMsg errorMsg={errors.email} />
          ) : null}

          <Input
            name='password'
            type='password'
            placeholder="Confirm with password"
            customInputClass="my-account__input"
            value={values.password}
            onChange={handleChange}
          />

          {(errors.password && touched.password) || authErrors ? (
            <ValidationErrMsg errorMsg={errors.password || authErrors} />
          ) : null}

          <button type="submit" className="my-account__submit-email-change submit-btn">Update</button>
        </form>
      )}
    </Formik>
  )
}
