import React from 'react';
import EmailChangeForm from './email-change/EmailChangeForm';

import './my-account.css'

export default function MyAccount({ changeUserEmail, userEmail, authErrors }) {
  return (
    <div className="settings__my-account first-layer-card_hovered">
      <EmailChangeForm
        submitForm={changeUserEmail}
        userEmail={userEmail}
        authErrors={authErrors}
      />
    </div>
  )
}
