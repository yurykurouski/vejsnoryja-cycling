import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileField from './profile-field/ProfileField';
import UserAvatar from '../../../../../common/user-avatar/UserAvatar';
import { updateUserInfo, getUserInfo } from '../../../../../../store/user-info/actions';

import './my-profile.css';

function MyProfile({
  updateUserInfo,
  userInfo,
  userId,
  getUserInfo,
}) {
  const [editedFields, handleClick] = useState([]);
  useEffect(() => {
    getUserInfo(userId);
  }, [getUserInfo, userId]);

  return (
    <div className="settings__my-profile first-layer-card_hovered">
      <div className="my-profile__user-info">
        {Object.entries(userInfo).map((value) => (
          <ProfileField
            key={value[0]}
            title={value[0]}
            value={value[1]}
            handleClick={handleClick}
            editedFields={editedFields}
            updateUserInfo={editedFields.includes(value[0]) ? updateUserInfo : undefined}
            inEdit={editedFields.includes(value[0])}
          />
        ))}

      </div>
      <div className="my-profile__user-avatar">
        <div className="my-profile__user-avatar-wrap">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}

MyProfile.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    userId: state.currentUser.user,
    userInfo: state.userInfo.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: (field) => dispatch(updateUserInfo(field)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
