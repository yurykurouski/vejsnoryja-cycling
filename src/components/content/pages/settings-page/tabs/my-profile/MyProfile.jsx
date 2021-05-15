import React, { useEffect, useState } from 'react';
import ProfileField from './profile-field/ProfileField';

import './my-profile.css';

export default function MyProfile({ getUserInfo, updateUserInfo, userId, userInfo }) {
  useEffect(() => {
    getUserInfo(userId);
  }, [getUserInfo, userId]);

  const [editedFields, handleClick] = useState([]);

  return (
    <div className="settings__my-profile first-layer-card_hovered">
      <div className="my-profile__user-info">
        {Object.entries(userInfo).map((value) => {
          if (editedFields.includes(value[0])) {
            return <ProfileField
              key={value[0]}
              title={value[0]}
              value={value[1]}
              handleClick={handleClick}
              editedFields={editedFields}
              updateUserInfo={updateUserInfo}
              inEdit={true}
            />
          } else {
            return <ProfileField
              key={value[0]}
              title={value[0]}
              value={value[1]}
              handleClick={handleClick}
              editedFields={editedFields}
            />
          }
        })}
      </div>
    </div>
  )
}
