import React, { Component } from 'react';
import EventCard from '../../../../common/event-card/EventCard';
import ActionStatus from "../../../../../constants/action-status";
import Loader from "../../../../common/loader/Loader";

export default class LastActivities extends Component {
  handleClick = () => {
    console.log('fsdfds')
  }

  render() {
    const { events, status } = this.props;
    return (
      <div>
        <ul className="main-page__events">
          {events.map((event) => (
            <EventCard
              event={event}
              key={event._id}
              btnTitle="Edit"
              btnIcon="edit"
              onClick={this.handleClick}
            />
          ))}
        </ul>

        {status === ActionStatus.LOADING && <Loader />}
      </div>
    )
  }
}