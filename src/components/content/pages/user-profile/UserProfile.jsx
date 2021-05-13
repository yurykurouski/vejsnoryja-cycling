import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/current-user/actions';
import { getEventsByUser, updateEventById } from '../../../../store/events/actions';
import './user-profile.css';
import LastActivities from './last-activities/LastActivities';
import { Switch, Route } from 'react-router-dom';
import UserGear from "./gear/UserGear";
import Tabs from "../../../common/tabs/Tabs";
import EventPage from '../../../common/event-page/EventPage';

const userProfileTabs = [
  {
    to: '/profile/last-activities',
    name: 'Last activities'
  },
  {
    to: '/profile/gear',
    name: 'Your gear'
  }
]

class UserProfile extends Component {
  componentDidMount() {
    this.props.getEventsByUser()
  }

  render() {
    const { logoutUser, events, status, currentUser, updateEventById } = this.props;

    return (
      <Switch>
        <Route exact path="/profile/edit-event/:eventID" render={({ match }) => (
          <EventPage
            event={events.find(event => event._id === match.params.eventID)}
            currentUser={currentUser}
            saveEvent={updateEventById}
          />
        )}>
        </Route>

        <div className="content__user-profile first-layer-card">
          <span className="user-profile__header">
            <h2 className="user-profile__heading card-heading">Your profile</h2>
            <button onClick={logoutUser} className="user-profile__logout-btn submit-btn sign-out-btn">Sign out</button>
          </span>

          <div className="user-profile__main second-layer-card">

            <Tabs tabs={userProfileTabs} />

            <Route path="/profile/last-activities">
              <LastActivities
                events={events}
                status={status}
              />
            </Route>

            <Route path="/profile/gear">
              <UserGear />
            </Route>

          </div>
        </div>
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    currentUser: state.currentUser.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getEventsByUser: () => dispatch(getEventsByUser()),
    updateEventById: (data) => dispatch(updateEventById(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
