import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProfileField from './profile-field/ProfileField';
import UserAvatar from '../../../../../common/user-avatar/UserAvatar';

import './my-profile.css';

export default function MyProfile({ updateUserInfo, userInfo }) {
  const [editedFields, handleClick] = useState([]);

  return (
    <div className="settings__my-profile first-layer-card_hovered">
      <div className="my-profile__user-info">
        {Object.entries(userInfo).map((value) => {
          if (editedFields.includes(value[0])) {
            return (
              <ProfileField
                key={value[0]}
                title={value[0]}
                value={value[1]}
                handleClick={handleClick}
                editedFields={editedFields}
                updateUserInfo={updateUserInfo}
                inEdit
              />
            );
          } return (
            <ProfileField
              key={value[0]}
              title={value[0]}
              value={value[1]}
              handleClick={handleClick}
              editedFields={editedFields}
            />
          );
        })}
      </div>
      <div className="my-profile__user-avatar">
        <div className="my-profile__user-avatar-wrap">
          <UserAvatar userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}

MyProfile.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
};
