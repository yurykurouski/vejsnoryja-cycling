import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { Component } from 'react';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from '../../../../../constants/';
import ValidationErrMsg from '../../../../common/validation-err-msg/ValidationErrMsg';
import '../auth-pages.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { registerUser } from '../../../../../store/current-user/actions';
import Loader from '../../../../common/loader/Loader';
import ActionStatus from '../../../../../constants/action-status';

function RegistrationPage(props) {
  const { registerUser, authErrors, status } = props;

  const validationSchema = Yup.object().shape({
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

  const submitForm = async (values) => {
    await registerUser(values);
  }

  return (
    <div className="content__registration-page auth-page first-layer-card">
      <h2 className="registration-page__heading auth-page__heading card-heading">Create new account</h2>

      <Formik
        initialValues={{ email: '', password: '', repeatPass: '' }}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form
            className="registration-page__form auth-page__form second-layer-card"
            onSubmit={handleSubmit}
          >

            <label className="input__label">
              Email

              <input
                name="email"
                type="text"
                onChange={handleChange}
                value={values.email}
                className="form__input form__input_email"
                autoFocus
              />
            </label>

            {(errors.email && touched.email) || authErrors ? (
              <ValidationErrMsg errorMsg={errors.email || authErrors} />
            ) : null}

            <label className="input__label">
              Password

              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className="form__input form__input_password"
                autoComplete="on"
              />
            </label>

            {errors.password && touched.password ? (
              <ValidationErrMsg errorMsg={errors.password} />
            ) : null}

            <label className="input__label">
              Repeat your password

              <input
                name='repeatPass'
                type='password'
                onChange={handleChange}
                value={values.repeatPass}
                className="form__input form__input_password"
                autoComplete="on"
              />
            </label>

            {errors.repeatPass && touched.repeatPass ? (
              <ValidationErrMsg errorMsg={errors.repeatPass} />
            ) : null}

            <section className="registration-page__controls form__controls">
              <button type="submit" className="registration-page__submit submit-btn">Create account</button>
              or
              <Link to='sign-in' className="registration-page__cancel cancel-btn">Sign in</Link>
            </section>
          </form>
        )}
      </Formik>

      {status === ActionStatus.LOADING && <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    authErrors: state.currentUser.authErrors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (data) => dispatch(registerUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
