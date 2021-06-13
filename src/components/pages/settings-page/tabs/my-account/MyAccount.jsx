import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EmailChangeForm from './email-change/EmailChangeForm';
import PasswordChangeForm from './password-change/PasswordChangeForm';

import './my-account.css';

function MyAccount({
  authErrors,
}) {
  return (
    <div className="settings__my-account first-layer-card_hovered">
      <EmailChangeForm
        authErrors={authErrors}
      />

      <PasswordChangeForm
        authErrors={authErrors}
      />
    </div>
  );
}

MyAccount.propTypes = {
  authErrors: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authErrors: state.currentUser.authErrors,
  };
}

export default connect(mapStateToProps)(MyAccount);
