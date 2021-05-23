import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';

import { addNewGear, getUserGear, deleteUserGear, editUserGear } from "../../../../store/gear/actions";
import { getUserInfo, updateUserInfo } from "../../../../store/user-info/actions";
import Tabs from '../../../common/tabs/Tabs';
import MyProfile from "./tabs/my-profile/MyProfile";
import MyGear from "./tabs/my-gear/MyGear";
import MyAccount from "./tabs/my-account/MyAccount";
import './settings-page.css';
import SettingsFields from "../../../../constants/settings-fields";
import ActionStatus from "../../../../constants/action-status";
import Loader from "../../../common/loader/Loader";

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
    infoStatus } = props;

  useEffect(() => {
    getUserGear();
  }, [getUserGear]);

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
            <MyAccount />
          </Route>

        </Switch>

      </div>
      {(gearStatus === ActionStatus.LOADING || infoStatus === ActionStatus.LOADING) && <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.currentUser.user,
    userInfo: state.userInfo.userInfo,
    infoStatus: state.userInfo.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUserInfo: (field) => dispatch(updateUserInfo(field)),
    addNewGear: (data) => dispatch(addNewGear(data)),
    getUserGear: () => dispatch(getUserGear()),
    deleteUserGear: (id) => dispatch(deleteUserGear(id)),
    editUserGear: (data) => dispatch(editUserGear(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
