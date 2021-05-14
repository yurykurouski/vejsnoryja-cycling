import React from 'react';
import { useHistory } from 'react-router-dom';

import EventCard from '../../../../common/event-card/EventCard';
import ActionStatus from '../../../../../constants/action-status';
import Loader from '../../../../common/loader/Loader';

export default function LastActivities({ events, status }) {
  const history = useHistory();
  const handleClick = (event) => history.push(`/profile/edit-event/${event._id}`);

  return (
    <div>
      <ul className="main-page__events">
        {events.map((event) => (
          <EventCard
            event={event}
            key={event._id}
            btnTitle="Edit"
            btnIcon="edit"
            onClick={() => handleClick(event)}
          />
        ))}
      </ul>

      {status === ActionStatus.LOADING && <Loader />}
    </div>
  )
}
