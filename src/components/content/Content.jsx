import React from 'react';
import './content.css'
import { Switch, Route } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import EventPage from "../common/event-page/EventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { connect } from 'react-redux';
import { addEvent } from "../../store/events/actions";
import SettingsPage from "./pages/settings-page/SettingsPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function Content({ addEvent }) {
  return (
    <div className='content'>
      <div className='content__wrap'>

        <Switch>
          <Route path='/'
            component={() => <MainPage
            />} exact />

          <PrivateRoute path='/new-event' component={EventPage} saveEvent={addEvent} />

          <PrivateRoute path='/profile' component={UserProfile} />

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