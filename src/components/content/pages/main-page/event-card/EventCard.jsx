import React from 'react';
import Moment from 'react-moment';
import EventCardDate from './event-card-date/EventCardDate';
import EventMap from '../../../../common/event-map/EventMap';

import './event-card.css';

export default function EventCard(props) {
  const { date, title, level, markerData, adress } = props.event;

  return (
    <li className="main-page__event first-layer-card_hovered">

      <EventCardDate customClass="event-card__date_date" date={date} />

      <div className="event-card__main">
        <span className="event-card__main__heading">
          <Moment
            element="span"
            format="dddd"
            className="date-header__day"
          >{date}</Moment>

          <Moment
            element="span"
            format="h:mm"
            className="date-header__start-time"
          >{date}</Moment>
          /
          <b>{title}</b>
        </span>

        <span className="event-card__main__level">
          {level}
        </span>

        <span>
          {adress}
        </span>
      </div>

      <EventMap
        markerData={markerData}
        isDraggable={false}
        mainClass="event__map"
      />



    </li>
  )
}

