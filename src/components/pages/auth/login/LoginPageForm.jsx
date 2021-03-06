import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authUser, loginUser } from '../../../../store/current-user/actions';
import ValidationErrMsg from '../../../common/validation-err-msg/ValidationErrMsg';

function LoginPageForm({
  loginUser,
  authUser,
  authErrors,
}) {
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .required('Email can not be empty.'),
    password: Yup
      .string()
      .required('Password can not be empty.'),
  });

  const submitForm = async (values) => {
    await loginUser(values);
    authUser();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >

      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="login-page__form auth-page__form second-layer-card">
          <label className="input__label" htmlFor="email">
            Email

            <input
              name="email"
              type="text"
              id="email"
              onChange={handleChange}
              value={values.email}
              className="form__input form__input_email"
            />
          </label>

          {(errors.email && touched.email) ? (
            <ValidationErrMsg errorMsg={errors.email} />
          ) : null}

          <label className="input__label" htmlFor="password">
            Password

            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              className="form__input form__input_password"
              autoComplete="on"
            />
          </label>

          {(errors.email && touched.email) || authErrors.password ? (
            <ValidationErrMsg errorMsg={errors.email || authErrors.password} />
          ) : null}

          <section className="login-page__controls form__controls">
            <button type="submit" className="login-page__submit submit-btn">Sign in</button>
            or
            <Link to="/sign-up" className="login-page__cancel cancel-btn">Create account</Link>
          </section>
        </form>
      )}

    </Formik>
  );
}

LoginPageForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  authErrors: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    authErrors: state.currentUser.authErrors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    authUser: () => dispatch(authUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageForm);
