import React from 'react';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';

import { addNewGear, getUserInfo, updateUserInfo } from "../../../../store/settings/actions";
import Tabs from '../../../common/tabs/Tabs';
import MyProfile from "./tabs/my-profile/MyProfile";
import MyGear from "./tabs/my-gear/MyGear";
import MyAccount from "./tabs/my-account/MyAccount";
import './settings-page.css';
import SettingsFields from "../../../../constants/settings-fields";

function SettingsPage({ userId, getUserInfo, updateUserInfo, addNewGear, userInfo, gear }) {
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
            <MyGear addNewGear={addNewGear}/>
          </Route>

          <Route path="/settings/my-account">
            <MyAccount />
          </Route>

        </Switch>

      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userId: state.currentUser.user,
    userInfo: state.settings.userInfo,
    gear: state.settings.gear
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUserInfo: (field) => dispatch(updateUserInfo(field)),
    addNewGear: (data) => dispatch(addNewGear(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
