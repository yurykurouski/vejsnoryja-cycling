import React, { Component } from 'react';
import './Content.css'
import { Switch, Route } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import NewEventPage from "./pages/new-event/NewEventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";
import { connect } from 'react-redux';
import { getAllEvents } from "../../store/events/actions";

class Content extends Component {

  render() {
    const { events, status, getAllEvents } = this.props;

    return (
      <div className='content'>
        <div className='content__wrap'>

          <Switch>
            <Route path='/' component={(props) => <MainPage
              events={events}
              status={status}
              getAllEvents={getAllEvents}
            />} exact />
            <Route path='/new-event' component={NewEventPage} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/login' component={LoginPage} />
          </Switch>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllEvents: () => dispatch(getAllEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);