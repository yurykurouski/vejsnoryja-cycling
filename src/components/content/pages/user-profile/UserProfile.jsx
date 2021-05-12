import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/current-user/actions';
import { getEventsByUser, getAllEvents } from '../../../../store/events/actions';
import './user-profile.css';
import LastActivities from './last-activities/LastActivities';
import { Switch, Route, Link } from 'react-router-dom';
import UserGear from "./gear/UserGear";
import Tabs from "../../../common/tabs/Tabs";

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
    const { logoutUser, getEventsByUser, events, status } = this.props;

    return (
      <div className="content__user-profile first-layer-card">
        <span className="user-profile__header">
          <h2 className="user-profile__heading card-heading">Your profile</h2>
          <button onClick={logoutUser} className="user-profile__logout-btn submit-btn sign-out-btn">Sign out</button>
        </span>

        <div className="user-profile__main second-layer-card">

          <Tabs tabs={userProfileTabs} />

          <Switch>
            <Route path="/profile/last-activities">
              <LastActivities
                getEventsByUser={getEventsByUser}
                events={events}
                status={status}
              />
            </Route>

            <Route path="/profile/gear">
              <UserGear />
            </Route>
          </Switch>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getEventsByUser: () => dispatch(getEventsByUser()),
    getAllEvents: () => dispatch(getAllEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
