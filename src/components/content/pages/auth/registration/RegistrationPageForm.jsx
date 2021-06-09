import { Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { registerUser, authUser } from '../../../../../store/current-user/actions';
import ValidationErrMsg from '../../../../common/validation-err-msg/ValidationErrMsg';

function RegistrationPageForm({
  validationSchema,
  registerUser,
  authUser,
  authErrors,
}) {
  const submitForm = async (values) => {
    await registerUser(values);
    authUser();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPass: '' }}
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
        <form
          className="registration-page__form auth-page__form second-layer-card"
          onSubmit={handleSubmit}
        >

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

          {(errors.email && touched.email) || authErrors.email ? (
            <ValidationErrMsg errorMsg={errors.email || authErrors.email} />
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

          {errors.password && touched.password ? (
            <ValidationErrMsg errorMsg={errors.password} />
          ) : null}

          <label className="input__label" htmlFor="repeatPass">
            Repeat your password

            <input
              name="repeatPass"
              type="password"
              id="repeatPass"
              onChange={handleChange}
              value={values.repeatPass}
              className="form__input form__input_password"
              autoComplete="on"
            />
          </label>

          {(errors.repeatPass && touched.repeatPass) ? (
            <ValidationErrMsg errorMsg={errors.repeatPass} />
          ) : null}

          <section className="registration-page__controls form__controls">
            <button type="submit" className="registration-page__submit submit-btn">Create account</button>
            or
            <Link to="/sign-in" className="registration-page__cancel cancel-btn">Sign in</Link>
          </section>
        </form>
      )}
    </Formik>
  );
}

RegistrationPageForm.propTypes = {
  validationSchema: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired,
  authErrors: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    authErrors: state.currentUser.authErrors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
    authUser: () => dispatch(authUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPageForm);
