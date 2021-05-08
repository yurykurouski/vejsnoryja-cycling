import React, { Component } from 'react';
import './content.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import NewEventPage from "./pages/new-event/NewEventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { connect } from 'react-redux';
import { getAllEvents } from "../../store/events/actions";

class Content extends Component {
  componentDidMount() {
    const { getAllEvents } = this.props;

    getAllEvents();
  }

  render() {
    const { events, status, getAllEvents, isAuthenticated } = this.props;

    return (
      <div className='content'>
        <div className='content__wrap'>

          <Switch>
            <Route path='/' component={() => <MainPage
              events={events}
              status={status}
              getAllEvents={getAllEvents}
            />} exact />

            <Route path='/new-event'>
              {isAuthenticated ? (
                <NewEventPage />
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
                <Redirect to='/profile' />
              )
                : <RegistrationPage />
              }
            </Route>

            <Route path='/login'>
              {isAuthenticated ? (
                <Redirect to='/profile' />
              )
                : <LoginPage />
              }
            </Route>

            <Route path='*'>
              <div>You got too far, folk (404) </div>
            </Route>
          </Switch>

        </div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    isAuthenticated: state.currentUser.isAuthenticated,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllEvents: () => dispatch(getAllEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);