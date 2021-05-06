import React, { Component } from 'react'
import ActionStatus from '../../../../constants/action-status';
import Loader from '../../../common/loader/Loader'
import EventCard from "./event-card/EventCard";
import './main-page.css';

export default class MainPage extends Component {

  render() {
    const { events, status } = this.props;

    return (
      <div className="content__main-page">
        <h2>Upcoming Events</h2>

        {events.map((event, index) => (
          <EventCard event={event} key={event._id}/>
        ))}

        {status === ActionStatus.LOADING && <Loader />}

      </div>
    );
  }
}
