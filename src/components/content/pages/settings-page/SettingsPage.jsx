import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyGear from './tabs/my-gear/MyGear';
import Tabs from '../../../common/tabs/Tabs';
import Loader from '../../../common/loader/Loader';
import MyProfile from './tabs/my-profile/MyProfile';
import MyAccount from './tabs/my-account/MyAccount';
import ActionStatus from '../../../../constants/store/action-status';
import SettingsFields from '../../../../constants/components-fields/settings-fields';

import './settings-page.css';
import { getUserInfo } from '../../../../store/user-info/actions';
import { getUserGear } from '../../../../store/gear/actions';

function SettingsPage({
  gearStatus,
  infoStatus,
  userStatus,
  userId,
  getUserInfo,
  getUserGear,
}) {
  useEffect(() => {
    getUserInfo(userId);
    getUserGear();
  }, [getUserInfo, getUserGear, userId]);
  return (
    <div className="content__settings first-layer-card">
      <h2 className="settings__heading card-heading">Settings</h2>

      <div className="settings__main">

        <Tabs tabs={SettingsFields.SETTINGS_TABS} />

        <Switch>
          <Route exact path="/settings">
            <Redirect to="/settings/my-profile" />
          </Route>

          {(gearStatus === ActionStatus.LOADING
            || infoStatus === ActionStatus.LOADING
            || userStatus === ActionStatus.LOADING)
            ? <Loader />
            : <>
              <Route path="/settings/my-profile">
                <MyProfile />
              </Route>

              <Route path="/settings/my-gear">
                <MyGear />
              </Route>

              <Route path="/settings/my-account">
                <MyAccount />
              </Route>
            </>}
        </Switch>
      </div>
    </div>
  );
}

SettingsPage.propTypes = {
  gearStatus: PropTypes.string.isRequired,
  infoStatus: PropTypes.string.isRequired,
  userStatus: PropTypes.string.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  getUserGear: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    infoStatus: state.userInfo.status,
    gearStatus: state.gear.status,
    userStatus: state.currentUser.status,
    userId: state.currentUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    getUserGear: () => dispatch(getUserGear()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
