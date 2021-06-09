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
import {
  addNewGear,
  getUserGear,
  deleteUserGear,
  editUserGear,
} from '../../../../store/gear/actions';

import './settings-page.css';

function SettingsPage({
  addNewGear,
  getUserGear,
  deleteUserGear,
  editUserGear,
  gear,
  gearStatus,
  infoStatus,
  userStatus,
}) {
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
            <MyProfile />
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
      {(gearStatus === ActionStatus.LOADING
        || infoStatus === ActionStatus.LOADING
        || userStatus === ActionStatus.LOADING) && <Loader />}
    </div>
  );
}

SettingsPage.propTypes = {
  addNewGear: PropTypes.func.isRequired,
  getUserGear: PropTypes.func.isRequired,
  deleteUserGear: PropTypes.func.isRequired,
  editUserGear: PropTypes.func.isRequired,
  gear: PropTypes.arrayOf(PropTypes.object).isRequired,
  gearStatus: PropTypes.string.isRequired,
  infoStatus: PropTypes.string.isRequired,
  userStatus: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    infoStatus: state.userInfo.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
    userStatus: state.currentUser.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewGear: (data) => dispatch(addNewGear(data)),
    getUserGear: () => dispatch(getUserGear()),
    deleteUserGear: (id) => dispatch(deleteUserGear(id)),
    editUserGear: (data) => dispatch(editUserGear(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
