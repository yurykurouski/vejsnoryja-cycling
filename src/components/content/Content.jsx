import React from 'react';
import './content.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import EventPage from "../common/event-page/EventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { connect } from 'react-redux';
import { addEvent } from "../../store/events/actions";
import SettingsPage from "./pages/settings-page/SettingsPage";

function Content({ isAuthenticated, addEvent }) {
  return (
    <div className='content'>
      <div className='content__wrap'>

        <Switch>
          <Route path='/'
            component={() => <MainPage
            />} exact />

          <Route path='/new-event'>
            {isAuthenticated ? (
              <EventPage saveEvent={addEvent} />
            )
              : <Redirect to='/' />
            }
          </Route>

          <Route path='/profile/:tab'>
            {isAuthenticated ? (
              <UserProfile />
            )
              : <Redirect to='/login' />
            }
          </Route>

          <Route path='/register'>
            {isAuthenticated ? (
              <Redirect to='/' />
            )
              : <RegistrationPage />
            }
          </Route>

          <Route path='/login'>
            {isAuthenticated ? (
              <Redirect to='/' />
            )
              : <LoginPage />
            }
          </Route>

          <Route path='/settings/:tab'>
            {isAuthenticated ? (
              <SettingsPage />
            )
              : <Redirect to='/login' />
            }
          </Route>

          <Route path='*'>
            <div>You gone too far, folk (404) </div>
          </Route>
        </Switch>

      </div>
    </div >
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);