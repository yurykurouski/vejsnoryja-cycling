import React from 'react';

import EventTitle from './new-event-inputs/EventTitle';
import EventAdress from './new-event-inputs/EventAdress';
import EventTerrain from './new-event-inputs/EventTerrain';
import EventLevel from './new-event-inputs/EventLevel';
import EventDescription from './new-event-inputs/EventDescription';
import EventDate from './new-event-inputs/EventDate';

export default function NewEventForm(props) {
  const {
    handleSubmit, handleChange, title, adress, date, terrain, level, description, errors, touched
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className='new-event__form'
    >

      <EventTitle
        onChange={handleChange}
        value={title}
        errors={errors.title}
        touched={touched.title}
      />

      <EventAdress
        onChange={handleChange}
        value={adress}
        errors={errors.adress}
        touched={touched.adress}
      />

      <EventDate
        onChange={handleChange}
        value={date}
      />

      <EventTerrain
        value={terrain}
        onChange={handleChange}
      />

      <EventLevel
        value={level}
        onChange={handleChange}
      />

      <EventDescription
        value={description}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  )
}
