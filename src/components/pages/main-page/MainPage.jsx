import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '../../common/loader/Loader';
import EventCard from '../../common/event-card/EventCard';
import ActionStatus from '../../../constants/store/action-status';
import { INITIAL_EVENTS_NUMBER_ON_PAGE } from '../../../constants';
import { getAllEvents, userInOutEvent } from '../../../store/events/actions';

import './main-page.css';

function MainPage({
  events,
  getAllEvents,
  userInOutEvent,
  userName,
  userId,
  status,
}) {
  const [eventsQuanity, setEventsQuanity] = useState(INITIAL_EVENTS_NUMBER_ON_PAGE);

  useEffect(() => {
    getAllEvents(eventsQuanity);
  }, [eventsQuanity]);

  const fetchMoreData = () => {
    setEventsQuanity(eventsQuanity + INITIAL_EVENTS_NUMBER_ON_PAGE);
  };

  return (
    <div className="content__main-page first-layer-card">

      <h2 className="main-page__heading card-heading">Upcoming Events</h2>
      {(events.length === 0 && status === ActionStatus.LOADING)
        ? <Loader />
        : <InfiniteScroll
            className="main-page__events"
            dataLength={events.length}
            next={fetchMoreData}
            hasMore
        >
          {events.map((event) => {
            const match = event.whosIn.find((user) => user.userId === userId);

            return (
              <EventCard
                event={event}
                key={event._id}
                onClick={() => userInOutEvent({ eventId: event._id, userName })}
                btnTitle={match ? "I'm Out" : "I'm In"}
                btnIcon={match ? 'remove_done' : 'done_outline'}
              />
            );
          })}
        </InfiniteScroll>}

      {status === ActionStatus.LOADING && <Loader />}

    </div>
  );
}

MainPage.defaultProps = {
  userName: null,
  userId: null,
  events: [],
};

MainPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  getAllEvents: PropTypes.func.isRequired,
  userInOutEvent: PropTypes.func.isRequired,
  userName: PropTypes.string,
  userId: PropTypes.string,
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    userName: state.userInfo.userInfo.Name,
    userId: state.currentUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllEvents: (items) => dispatch(getAllEvents(items)),
    userInOutEvent: (data) => dispatch(userInOutEvent(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
