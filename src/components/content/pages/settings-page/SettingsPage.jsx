import React from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import { getUserInfo } from "../../../../store/settings/actions";
import Tabs from '../../../common/tabs/Tabs';
import MyProfile from "./tabs/my-profile/MyProfile";
import MyGear from "./tabs/my-gear/MyGear";
import MyAccount from "./tabs/my-account/MyAccount";
import './settings-page.css';

const settingsTabs = [
  {
    to: '/settings/my-profile',
    name: 'My Profile'
  },

  {
    to: '/settings/my-gear',
    name: 'My Gear'
  },

  {
    to: '/settings/my-account',
    name: 'My Account'
  }
]

function SettingsPage({ userId, getUserInfo, userInfo}) {
  return (
    <div className="content__settings first-layer-card">
      <h2 className="settings__heading card-heading">Settings</h2>

      <div className="settings__main second-layer-card">
      
        <Tabs tabs={settingsTabs} />

        <Switch>
          <Route path="/settings/my-profile">
            <MyProfile
              getUserInfo={getUserInfo}
              userId={userId}
              userInfo={userInfo}
            />
          </Route>

          <Route path="/settings/my-gear">
            <MyGear />
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
    userInfo: state.settings.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
