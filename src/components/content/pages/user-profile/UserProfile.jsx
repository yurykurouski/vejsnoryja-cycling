import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser } from '../../../../store/current-user/actions';
import { getEventsByUser, getAllEvents } from '../../../../store/events/actions';
import './user-profile.css';
import LastActivities from './last-activities/LastActivities';

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
          <span className="user-profile__tabs">
            <span className="user-profile__tab user-profile__tab_active tab_activities">Last activities</span>
            <span className="user-profile__tab tab_gear">Your gear</span>
          </span>

          <LastActivities
            getEventsByUser={getEventsByUser}
            events={events}
            status={status}
          />

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
