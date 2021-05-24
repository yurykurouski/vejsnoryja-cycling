import React from 'react';
import Moment from 'react-moment';
import Icon from '@material-ui/core/Icon';

import EventMap from './event-card-map/EventMap';
import IconButton from '../icon-button/IconButton';
import EventCardDate from './event-card-date/EventCardDate';

import './event-card.css';

export default function EventCard(props) {
  const { btnTitle, btnIcon, onClick } = props;
  const { date, title, level, distance, markerData, adress } = props.event;

  return (
    <li className="main-page__event first-layer-card_hovered">

      <div className="event-card__aside">
        <EventCardDate customClass="event-card__date_date" date={date} />

        <IconButton
          onClick={onClick}
          btnTitle={btnTitle}
          btnIcon={btnIcon}
        />
      </div>

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

        {distance && <span className="event-card__main__distance event-details">
          <Icon
            style={{ opacity: .9 }}
            title="Distance"
          >directions_bike</Icon> {distance}
        </span>}

        {level && <span className="event-card__main__level event-details">
          <Icon
            style={{ opacity: .9 }}
            title="Level/Event type"
          >speed</Icon> {level}
        </span>}

        {adress && <address className="event-card__main__adress event-details">
          <Icon
            style={{ opacity: .9 }}
            title="Adress"
          >place</Icon> {adress}
        </address>}
      </div>

      <EventMap
        markerData={markerData}
        isDraggable={false}
        mainClass="event__map"
      />

    </li>
  )
}

