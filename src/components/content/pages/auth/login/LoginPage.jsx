import React, { Component } from 'react'
import { Formik } from 'formik';
import '../auth-pages.css';
import * as Yup from 'yup';
import ValidationErrMsg from '../../../../common/validation-err-msg/ValidationErrMsg';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { authUser, loginUser } from '../../../../../store/current-user/actions';
import Loader from '../../../../common/loader/Loader';
import ActionStatus from '../../../../../constants/action-status';

class AuthorizationPage extends Component {
  constructor() {
    super();

    this.validationSchema = Yup.object().shape({
      email: Yup
        .string()
        .required('Email can not be empty.'),
      password: Yup
        .string()
        .required('Password can not be empty.'),
    });
  }

  submitForm = async (values) => {
    const { loginUser, authUser } = this.props;

    await loginUser(values);
    authUser();
  }

  render() {
    const { authErrors, status } = this.props;

    return (
      <div className="content__login-page auth-page first-layer-card">
        <h2 className="login-page__heading auth-page__heading card-heading">LoginPage</h2>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >

          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit} className="login-page__form auth-page__form second-layer-card">
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
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={values.password}
                  className="form__input form__input_password"
                  autoComplete="on"
                />
              </label>

              {errors.password && touched.password ? (
                <ValidationErrMsg errorMsg={errors.password} />
              ) : null}

              <section className="login-page__controls form__controls">
                <button type="submit" className="login-page__submit submit-btn">Log in</button>
                or
                <Link to='register' className="login-page__cancel cancel-btn">Sign in</Link>
              </section>
            </form>
          )}

        </Formik>

        {status === ActionStatus.LOADING && <Loader />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    authErrors: state.currentUser.authErrors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    authUser: () => dispatch(authUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);