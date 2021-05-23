import React from 'react';
import { useHistory } from 'react-router-dom';

import EventCard from '../../../../common/event-card/EventCard';

export default function LastActivities({ events }) {
  const history = useHistory();
  const handleClick = (event) => history.push(`/profile/edit-event/${ event._id }`);

  return (
    <>
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
    </  >
  )
}
