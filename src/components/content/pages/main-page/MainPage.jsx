import React, { Component } from 'react'
import ActionStatus from '../../../../constants/action-status';
import Loader from '../../../common/loader/Loader'
import EventCard from '../../../common/event-card/EventCard';
import './main-page.css';
import { connect } from 'react-redux';
import { getAllEvents } from '../../../../store/events/actions';

class MainPage extends Component {
  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    const { events, status } = this.props;

    return (
      <div className="content__main-page">

        <h2 className="main-page__heading card-heading first-layer-card">Upcoming Events</h2>

        <ul className="main-page__events">
          {events.map((event) => (
            <EventCard
              event={event}
              key={event._id}
              btnTitle="I'm in"
              btnIcon="done_outline"
            />
          ))}
        </ul>

        {status === ActionStatus.LOADING && <Loader />}

      </div>
    );
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
    getAllEvents: () => dispatch(getAllEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);