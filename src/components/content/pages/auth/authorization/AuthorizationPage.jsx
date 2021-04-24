import React, { Component } from 'react'
import { Formik } from 'formik';
import authService from '../../../../../services/auth-service';
import * as Yup from 'yup';
import ValidationErrMsg from '../../../../elements/validation-err-msg/ValidationErrMsg';

export default class AuthorizationPage extends Component {
  constructor() {
    super();

    this.state = {
      authError: null,
    }

    this.submitForm = this.submitForm.bind(this);
    this.validationSchema = Yup.object().shape({
      email: Yup
        .string()
        .required('Email cannot be empty.'),
      password: Yup
        .string()
        .required('Password can not be empty.'),
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
      <div className='content__authorization-page'>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >

          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="email"
                name='email'
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

              <button type='submit'>Submit</button>
            </form>
          )}

        </Formik>

      </div>
    )
  }
}
