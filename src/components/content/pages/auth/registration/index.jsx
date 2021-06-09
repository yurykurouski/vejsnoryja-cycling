import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../../../common/loader/Loader';
import ActionStatus from '../../../../../constants/store/action-status';
import { MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from '../../../../../constants';

import '../auth-pages.css';
import RegistrationPageForm from './RegistrationPageForm';

function RegistrationPage({
  status,
}) {
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Email invalid format.')
      .required('Email cannot be empty.'),
    password: Yup
      .string()
      .min(8, `Password should contain at least ${ MIN_PASSWORD_LENGTH } characters`)
      .matches(PASSWORD_REGEX, 'Password invalid format.')
      .required('Password can not be empty.'),
    repeatPass: Yup
      .string()
      .oneOf([Yup.ref('password'), null], 'Passwords does not match.')
      .required('Confirm your password.'),
  });

  return (
    <div className="content__registration-page auth-page first-layer-card">
      <h2 className="registration-page__heading auth-page__heading card-heading">Create new account</h2>

      <RegistrationPageForm
        validationSchema={validationSchema}
      />

      {status === ActionStatus.LOADING && <Loader />}
    </div>
  );
}

RegistrationPage.propTypes = {
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    status: state.events.status,
  };
}

export default connect(mapStateToProps)(RegistrationPage);
