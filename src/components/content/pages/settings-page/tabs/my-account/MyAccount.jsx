import React from 'react';
import PropTypes from 'prop-types';

import EmailChangeForm from './email-change/EmailChangeForm';
import PasswordChangeForm from './password-change/PasswordChangeForm';

import './my-account.css';

export default function MyAccount({
  changeUserEmail,
  userEmail,
  authErrors,
  changeUserPassword,
}) {
  return (
    <div className="settings__my-account first-layer-card_hovered">
      <EmailChangeForm
        submitForm={changeUserEmail}
        userEmail={userEmail}
        authErrors={authErrors}
      />

      <PasswordChangeForm
        submitForm={changeUserPassword}
        authErrors={authErrors}
      />
    </div>
  );
}

MyAccount.propTypes = {
  changeUserEmail: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  authErrors: PropTypes.object.isRequired,
  changeUserPassword: PropTypes.func.isRequired,
};
