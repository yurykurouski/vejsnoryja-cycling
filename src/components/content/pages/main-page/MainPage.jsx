import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Loader from '../../../common/loader/Loader'
import EventCard from '../../../common/event-card/EventCard';
import ActionStatus from '../../../../constants/store/action-status';
import { getAllEvents, userInOutEvent } from '../../../../store/events/actions';

import './main-page.css';

function MainPage({ events, status, getAllEvents, userInOutEvent, userName, userId }) {
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  return (
    <div className="content__main-page">

      <h2 className="main-page__heading card-heading first-layer-card">Upcoming Events</h2>

      <ul className="main-page__events">
        {events.map((event) => {
          const match = event.whosIn.find(user => user.userId === userId);

          return (
            <EventCard
              event={event}
              key={event._id}
              onClick={() => userInOutEvent({ eventId: event._id, userName })}
              btnTitle={match ? "I'm Out" : "I'm In"}
              btnIcon={match ? "remove_done" : "done_outline"}
            />
          )
        })}
      </ul>

      {status === ActionStatus.LOADING && <Loader />}

    </div>
  )
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    userName: state.userInfo.userInfo.Name,
    userId: state.currentUser.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllEvents: () => dispatch(getAllEvents()),
    userInOutEvent: (data) => dispatch(userInOutEvent(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);