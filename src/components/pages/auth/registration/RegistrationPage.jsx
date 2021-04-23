import React, { Component } from 'react';
import { Formik } from 'formik';
import authService from '../../../../services/auth-service';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from '../../../../constants';
import * as Yup from 'yup';

import sha256 from 'crypto-js/sha256';

export default class RegistrationPage extends Component {
  constructor() {
    super();

    this.submitForm = this.submitForm.bind(this);
    this.validationSchema = Yup.object().shape({
      email: Yup
        .string()
        .email('Email invalid format.').required('Email cannot be empty.'),
      password: Yup
        .string()
        .min(8, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`)
        .matches(PASSWORD_REGEX, 'Password invalid format.')
        .required('Password can not be empty.'),
      repeatPass: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords does not match.')
    })
  }

  async submitForm(values) {
    authService.userRegister(values)
  }

  render() {
    return (
      <div className='content__registration-page'>

        <h2>Be prepared for amazing journey, Vejsnorian!</h2>

        <Formik
          initialValues={{ email: '', password: '', repeatPass: '' }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form
              onSubmit={handleSubmit}
            >
              <input
                onChange={handleChange}
                name='email'
                value={values.email}
                placeholder='Email'
                autoFocus
              ></input>

              <input
                onChange={handleChange}
                name='password'
                type='password'
                value={values.password}
                placeholder='Password'
              ></input>

              <input
                onChange={handleChange}
                name='repeatPass'
                type='password'
                value={values.repeatPass}
                placeholder='Repeat password'
              ></input>

              <button type='submit'>Submit</button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}
