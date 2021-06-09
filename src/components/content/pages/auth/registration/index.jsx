import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../../../common/loader/Loader';
import ActionStatus from '../../../../../constants/store/action-status';

import '../auth-pages.css';
import RegistrationPageForm from './RegistrationPageForm';

function RegistrationPage({
  status,
}) {
  return (
    <div className="content__registration-page auth-page first-layer-card">
      <h2 className="registration-page__heading auth-page__heading card-heading">Create new account</h2>

      <RegistrationPageForm />

      {status === ActionStatus.LOADING && <Loader />}
    </div>
  );
}

RegistrationPage.propTypes = {
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    status: state.currentUser.status,
  };
}

export default connect(mapStateToProps)(RegistrationPage);
