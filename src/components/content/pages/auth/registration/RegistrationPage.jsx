import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { Component } from 'react';
import authService from '../../../../../services/auth-service';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from '../../../../../constants';
import ValidationErrMsg from '../../../../elements/validation-err-msg/ValidationErrMsg';

export default class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      authError: null
    };

    this.submitForm = this.submitForm.bind(this);
    this.validationSchema = Yup.object().shape({
      email: Yup
        .string()
        .email('Email invalid format.')
        .required('Email cannot be empty.'),
      password: Yup
        .string()
        .min(8, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`)
        .matches(PASSWORD_REGEX, 'Password invalid format.')
        .required('Password can not be empty.'),
      repeatPass: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords does not match.')
    });
  }

  async submitForm(values) {

    const res = await authService.userRegister(values);

    if (res) {
      this.setState({
        authError: res
      });
    }
  }

  render() {
    const { authError } = this.state;

    return (
      <div className='content__registration-page'>

        <h2>RegistrationPage</h2>

        <Formik
          initialValues={{ email: '', password: '', repeatPass: '' }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form
              onSubmit={handleSubmit}
            >
              <input
                onChange={handleChange}
                name='email'
                type='email'
                value={values.email}
                placeholder='Email'
                autoFocus
              />

              {(errors.email && touched.email) || authError ? (
                <ValidationErrMsg errorMsg={errors.email || authError} />
              ) : null}

              <input
                onChange={handleChange}
                name='password'
                type='password'
                value={values.password}
                placeholder='Password'
                autoComplete="on"
              />

              {errors.password && touched.password ? (
                <ValidationErrMsg errorMsg={errors.password} />
              ) : null}

              <input
                onChange={handleChange}
                name='repeatPass'
                type='password'
                value={values.repeatPass}
                placeholder='Repeat password'
                autoComplete="on"
              />

              {errors.repeatPass && touched.repeatPass ? (
                <ValidationErrMsg errorMsg={errors.repeatPass} />
              ) : null}

              <button type='submit'>Submit</button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}
