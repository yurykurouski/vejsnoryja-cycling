import React from 'react';
import Moment from 'react-moment';
import './event-card-date.css';

export default function EventCardDate(props) {
  const { customClass, date } = props;
  return (
    <div className="event-card__date date">
      <Moment
        element="span"
        format="D"
        className={`${customClass} date_date`}
        locale="en"
      >{date}</Moment>

      <Moment
        element="span"
        format="MMM"
        className={`${customClass} date_month`}
        locale="en"
      >{date}</Moment>
    </div>
  )
}
