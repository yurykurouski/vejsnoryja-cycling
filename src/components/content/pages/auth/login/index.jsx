import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginPageForm from './LoginPageForm';
import Loader from '../../../../common/loader/Loader';
import ActionStatus from '../../../../../constants/store/action-status';

import '../auth-pages.css';

function LoginPage({
  status,
}) {
  return (
    <div className="content__login-page auth-page first-layer-card">
      <h2 className="login-page__heading auth-page__heading card-heading">Sign in</h2>

      <LoginPageForm />

      {status === ActionStatus.LOADING && <Loader />}
    </div>
  );
}

LoginPage.propTypes = {
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    status: state.currentUser.status,
  };
}

export default connect(mapStateToProps)(LoginPage);
