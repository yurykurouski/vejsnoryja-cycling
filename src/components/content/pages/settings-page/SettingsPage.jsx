import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyGear from './tabs/my-gear/MyGear';
import Tabs from '../../../common/tabs/Tabs';
import Loader from '../../../common/loader/Loader';
import MyProfile from './tabs/my-profile/MyProfile';
import MyAccount from './tabs/my-account/MyAccount';
import ActionStatus from '../../../../constants/store/action-status';
import { getUserInfo, updateUserInfo } from '../../../../store/user-info/actions';
import { changeUserEmail } from '../../../../store/current-user/actions';
import SettingsFields from '../../../../constants/components-fields/settings-fields';
import { addNewGear, getUserGear, deleteUserGear, editUserGear } from '../../../../store/gear/actions';

import './settings-page.css';

function SettingsPage(props) {
  const { userId,
    getUserInfo,
    updateUserInfo,
    addNewGear,
    userInfo,
    getUserGear,
    deleteUserGear,
    editUserGear,
    gear,
    gearStatus,
    infoStatus,
    changeUserEmail,
    userEmail,
    authErrors,
    userStatus
  } = props;

  useEffect(() => {
    getUserGear();
    getUserInfo(userId);
  }, [getUserGear, getUserInfo, userId]);

  return (
    <div className="content__settings first-layer-card">
      <h2 className="settings__heading card-heading">Settings</h2>

      <div className="settings__main second-layer-card">

        <Tabs tabs={SettingsFields.SETTINGS_TABS} />

        <Switch>
          <Route exact path="/settings">
            <Redirect to="/settings/my-profile" />
          </Route>

          <Route path="/settings/my-profile">
            <MyProfile
              getUserInfo={getUserInfo}
              userId={userId}
              userInfo={userInfo}
              updateUserInfo={updateUserInfo}
            />
          </Route>

          <Route path="/settings/my-gear">
            <MyGear
              addNewGear={addNewGear}
              getUserGear={getUserGear}
              gear={gear}
              deleteUserGear={deleteUserGear}
              editUserGear={editUserGear}
            />
          </Route>

          <Route path="/settings/my-account">
            <MyAccount
              changeUserEmail={changeUserEmail}
              userEmail={userEmail}
              authErrors={authErrors}
            />
          </Route>

        </Switch>

      </div>
      {(gearStatus === ActionStatus.LOADING || infoStatus === ActionStatus.LOADING || userStatus === ActionStatus.LOADING) && <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.currentUser.user,
    userEmail: state.currentUser.userEmail,
    userInfo: state.userInfo.userInfo,
    infoStatus: state.userInfo.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
    authErrors: state.currentUser.authErrors,
    userStatus: state.currentUser.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUserInfo: (field) => dispatch(updateUserInfo(field)),
    addNewGear: (data) => dispatch(addNewGear(data)),
    getUserGear: () => dispatch(getUserGear()),
    deleteUserGear: (id) => dispatch(deleteUserGear(id)),
    editUserGear: (data) => dispatch(editUserGear(data)),
    changeUserEmail: (data) => dispatch(changeUserEmail(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
