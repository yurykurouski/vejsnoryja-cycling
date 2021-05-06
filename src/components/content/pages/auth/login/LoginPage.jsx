import React, { Component } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import ValidationErrMsg from '../../../../common/validation-err-msg/ValidationErrMsg';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { authUser, logoutUser, loginUser } from '../../../../../store/current-user/actions';

class AuthorizationPage extends Component {
  constructor() {
    super();

    this.logOut = this.logOut.bind(this);

    this.submitForm = this.submitForm.bind(this);
    this.validationSchema = Yup.object().shape({
      email: Yup
        .string()
        .required('Email can not be empty.'),
      password: Yup
        .string()
        .required('Password can not be empty.'),
    });
  }

  logOut() {
    const { logoutUser } = this.props;

    logoutUser();
  }

  async submitForm(values) {
    const { loginUser, authUser } = this.props;

    await loginUser(values);
    authUser();
  }

  render() {
    const { authErrors } = this.props;

    return (
      <div className='content__authorization-page'>
        <button onClick={this.logOut}>logout</button>
        <h2>LoginPage</h2>

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

              {(errors.email && touched.email) || authErrors ? (
                <ValidationErrMsg errorMsg={errors.email || authErrors} />
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
        <Link to='register'>REGISTER</Link>
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
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);