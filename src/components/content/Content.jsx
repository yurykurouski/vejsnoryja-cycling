import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import MainPage from './pages/main-page/MainPage';
import LoginPage from './pages/auth/login/LoginPage';
import { addEvent } from '../../store/events/actions';
import EventPage from '../common/event-page/EventPage';
import UserProfile from './pages/user-profile/UserProfile';
import SettingsPage from './pages/settings-page/SettingsPage';

import RegistrationPage from './pages/auth/registration/RegistrationPage';

import './content.css'

function Content({ addEvent }) {
  return (
    <div className='content'>
      <div className='content__wrap'>

        <Switch>
          <Route path='/'
            component={() => <MainPage
            />} exact />

          <PrivateRoute path='/new-event' component={EventPage} saveEvent={addEvent} />

          <PrivateRoute path='/profile/:userId' component={UserProfile} />

          <PublicRoute path='/sign-up' restricted={true} component={RegistrationPage} />

          <PublicRoute path='/sign-in' restricted={true} component={LoginPage} />

          <PrivateRoute path='/settings' component={SettingsPage} />

          <Route path='*'>
            <div>You gone too far, folk (404) </div>
          </Route>
        </Switch>

      </div>
    </div >
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
  }
}

export default connect(null, mapDispatchToProps)(Content);