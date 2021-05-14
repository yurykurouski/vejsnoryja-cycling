import React, { useEffect } from 'react';
import ProfileField from './profile-field/ProfileField';


export default function MyProfile({ getUserInfo, userId }) {
  useEffect(() => {
    getUserInfo(userId);
  }, [getUserInfo, userId])


  return (
    <div className="settings__my-profile first-layer-card_hovered">

      <ProfileField title="name" value="value" />
    </div>
  )
}


