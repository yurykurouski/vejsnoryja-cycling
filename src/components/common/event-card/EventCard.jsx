import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';

import EventMap from './event-card-map/EventMap';
import IconButton from '../icon-button/IconButton';
import UserAvatar from '../user-avatar/UserAvatar';
import EventCardDate from './event-card-date/EventCardDate';

import './event-card.css';

export default function EventCard({
  btnTitle,
  btnIcon,
  onClick,
  deleteEvent,
  event,
}) {
  const isAuthenticated = useSelector((state) => state.currentUser.isAuthenticated);
  const {
    date,
    title,
    level,
    distance,
    terrain,
    markerData,
    adress,
    whosIn,
  } = event;

  return (
    <li className="main-page__event first-layer-card_hovered">

      <div className="event-card__aside">
        <EventCardDate customClass="event-card__date_date" date={date} />

        <div className="event-card__buttons">
          {deleteEvent && <IconButton
            onClick={deleteEvent}
            btnTitle="Delete this event"
            btnIcon="delete"
            color="red"
          />}

          {isAuthenticated && <IconButton
            onClick={onClick}
            btnTitle={btnTitle}
            btnIcon={btnIcon}
          />}

        </div>
      </div>

      <div className="event-card__main">
        <div className="event-card__part_top event-card__part">
          <span className="event-card__main__heading">
            <Moment
              element="span"
              format="dddd"
              className="date-header__day"
            >
              {date}
            </Moment>

            <Moment
              element="span"
              format="h:mm"
              className="date-header__start-time"
            >
              {date}
            </Moment>
            /
            <b className="event-card__title">{title}</b>
          </span>

          <div className="event-card__details">
            {distance && <span className="event-card__main__distance event-details">
              <Icon
                style={{ opacity: 0.9 }}
                title="Distance"
              >
                directions_bike
              </Icon>
              {`${distance}km`}
            </span>}

            {terrain && <span className="event-card__main__terrain event-details">
              <Icon
                style={{ opacity: 0.9 }}
                title="Terrain"
              >
                terrain
              </Icon>
              {terrain}
            </span>}

            {level && <span className="event-card__main__level event-details">
              <Icon
                style={{ opacity: 0.9 }}
                title="Level/Event type"
              >
                speed
              </Icon>
              {level}
            </span>}
          </div>
        </div>

        <div className="event-card__part_bottom event-card__part">
          {adress && <address className="event-card__main__adress event-details">
            <Icon
              style={{ opacity: 0.9 }}
              title="Adress"
            >
              place
            </Icon>
            {adress}
          </address>}

          {whosIn.length > 0 && <span className="event-card__main__whos-in">
            {whosIn.map((user) => (
              <div key={user.userId} className="whos-in__avatar-wrap" title={user.userName}>
                <Link to={`/profile/${ user.userId }/last-activities`}>
                  <UserAvatar />
                </Link>
              </div>
            ))}
          </span>}

        </div>
      </div>

      <EventMap
        markerData={markerData}
        isDraggable={false}
        mainClass="event__map"
      />

    </li>
  );
}

EventCard.defaultProps = {
  deleteEvent: null,
};

EventCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func,
  btnTitle: PropTypes.string.isRequired,
  btnIcon: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
};
