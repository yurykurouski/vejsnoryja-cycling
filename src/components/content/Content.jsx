import React, { Component } from 'react';
import './content.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import EventPage from "../common/event-page/EventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className='content'>
        <div className='content__wrap'>

          <Switch>
            <Route path='/'
              component={() => <MainPage
            />} exact />

            <Route path='/new-event'>
              {isAuthenticated ? (
                <EventPage />
              )
                : <Redirect to='/' />
              }
            </Route>

            <Route path='/profile'>
              {isAuthenticated ? (
                <UserProfile />
              )
                : <Redirect to='/login' />
              }
            </Route>

            <Route path='/register'>
              {isAuthenticated ? (
                <Redirect to='/profile/last-activities' />
              )
                : <RegistrationPage />
              }
            </Route>

            <Route path='/login'>
              {isAuthenticated ? (
                <Redirect to='/profile/last-activities' />
              )
                : <LoginPage />
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
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(Content);