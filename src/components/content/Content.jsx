import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import LoginPage from '../pages/auth/login';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import NotFound from '../pages/not-found/NotFound';
import MainPage from '../pages/main-page/MainPage';
import { addEvent } from '../../store/events/actions';
import EventPage from '../common/event-page/EventPage';
import RegistrationPage from '../pages/auth/registration';
import UserProfile from '../pages/user-profile/UserProfile';
import SettingsPage from '../pages/settings-page/SettingsPage';

import './content.css';

function Content({ addEvent }) {
  return (
    <div className="content">
      <div className="content__wrap">

        <Switch>
          <PublicRoute exact path="/" restricted={false} component={MainPage} />

          <PrivateRoute path="/new-event" component={EventPage} saveEvent={addEvent} />

          <PrivateRoute path="/profile/:userId" component={UserProfile} />

          <PublicRoute path="/sign-up" restricted component={RegistrationPage} />

          <PublicRoute path="/sign-in" restricted component={LoginPage} />

          <PrivateRoute path="/settings" component={SettingsPage} />

          <PublicRoute path="*" restricted={false} component={NotFound} />
        </Switch>

      </div>
    </div>
  );
}

Content.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
  };
}

export default connect(null, mapDispatchToProps)(Content);
