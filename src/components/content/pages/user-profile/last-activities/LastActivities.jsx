import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import EventCard from '../../../../common/event-card/EventCard';

export default function LastActivities({ getEventsByUser, userId, events }) {
  useEffect(() => {
    getEventsByUser(userId);
  }, [getEventsByUser, userId]);

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
