import React from 'react';
import './new-event-form.css'

import EventTitle from './new-event-inputs/EventTitle';
import EventAdress from './new-event-inputs/EventAdress';
import EventTerrain from './new-event-inputs/EventTerrain';
import EventLevel from './new-event-inputs/EventLevel';
import EventDescription from './new-event-inputs/EventDescription';
import EventDate from './new-event-inputs/EventDate';
import ValidationErrMsg from "../../../../common/validation-err-msg/ValidationErrMsg";

export default function NewEventForm(props) {
  const {
    handleSubmit, handleChange, title, adress, date, terrain, level, description, errors, touched
  } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className='new-event__form second-layer-card'
    >

      <div className="form__title-wrap">
        <EventTitle
          onChange={handleChange}
          value={title}
          errors={errors.title}
          touched={touched.title}
        />

        <EventDate
          onChange={handleChange}
          value={date}
        />
      </div>

      <EventAdress
        onChange={handleChange}
        value={adress}
        errors={errors.adress}
        touched={touched.adress}
      />

      <div className="form__terrain-level-wrap">
        <EventTerrain
          value={terrain}
          onChange={handleChange}
        />

        <EventLevel
          value={level}
          onChange={handleChange}
        />
      </div>

      <EventDescription
        value={description}
        onChange={handleChange}
      />

      <section className="new-event__controls form__controls">
        <button type="submit" className="new-event__submit submit-btn">Send</button>
        or
        <a href="#!" className="new-event__cancel cancel-btn">Cancel</a>
      </section>
    </form>
  )
}
