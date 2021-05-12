import React from 'react';
import './new-event-form.css'

import EventTitle from './new-event-inputs/EventTitle';
import EventAdress from './new-event-inputs/EventAdress';
import EventTerrain from './new-event-inputs/EventTerrain';
import EventLevel from './new-event-inputs/EventLevel';
import EventDescription from './new-event-inputs/EventDescription';
import EventDate from './new-event-inputs/EventDate';
import Distance from './new-event-inputs/Distance';

import EventMap from '../../../../common/event-card/event-card-map/EventMap';

export default function NewEventForm(props) {
  const {
    handleSubmit, handleChange, title, adress, date, terrain, level, description, distance, errors, touched, addMarker, updateMarker, markerData
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

      <EventDescription
        value={description}
        onChange={handleChange}
      />

      <div className="form__terrain-level-wrap">
        <Distance
          value={distance}
          onChange={handleChange}
          errors={errors.distance}
          touched={touched.distance}
        />

        <EventTerrain
          value={terrain}
          onChange={handleChange}
        />

        <EventLevel
          value={level}
          onChange={handleChange}
        />
      </div>

      <EventAdress
        onChange={handleChange}
        value={adress}
        errors={errors.adress}
        touched={touched.adress}
      />

      <EventMap
        addMarker={addMarker}
        updateMarker={updateMarker}
        markerData={markerData}
        isDraggable={true}
        mainClass="new-event__map"
      />

      <section className="new-event__controls form__controls">
        <button type="submit" className="new-event__submit submit-btn">Send</button>
        or
        <a href="#!" className="new-event__cancel cancel-btn">Cancel</a>
      </section>
    </form>
  )
}
