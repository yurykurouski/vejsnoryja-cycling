import React, { Component } from 'react'
import { Formik } from 'formik';
import authService from '../../../../../services/auth-service';
import * as Yup from 'yup';
import ValidationErrMsg from '../../../../elements/validation-err-msg/ValidationErrMsg';
import { connect } from 'react-redux';
import { authUser, logoutUser } from '../../../../../store/current-user/actions'

class AuthorizationPage extends Component {
  constructor() {
    super();

    this.state = {
      authError: null,
    }

    this.pressButton = this.pressButton.bind(this);
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

   pressButton() {
    const { currentUser } = this.props;

    console.log( currentUser);
  }

  logOut() {
    const { logoutUser } = this.props;

    logoutUser();
  }

  async submitForm(values) {
    const { authUser } = this.props;

    const res = await authService.userLogin(values);

    if (res.token) {
      localStorage.setItem('token', await res.token);

      await authUser();
    } else if (res) {
      this.setState({
        authError: await res
      });
    }
  }

  render() {
    const { authError } = this.state;

    return (
      <div className='content__authorization-page'>
        <button onClick={this.pressButton}>authentication state</button>
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);