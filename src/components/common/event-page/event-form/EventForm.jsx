import React from 'react';

import Distance from '../event-form-inputs/Distance';
import EventDate from '../event-form-inputs/EventDate';
import EventLevel from '../event-form-inputs/EventLevel';
import EventTitle from '../event-form-inputs/EventTitle';
import EventAdress from '../event-form-inputs/EventAdress';
import EventTerrain from '../event-form-inputs/EventTerrain';
import EventDescription from '../event-form-inputs/EventDescription';

import EventMap from '../../event-card/event-card-map/EventMap';

import './event-form.css'

export default function EventForm(props) {
  const {
    handleSubmit,
    handleChange,
    title,
    adress,
    date,
    terrain,
    level,
    description,
    distance,
    errors,
    touched,
    addMarker,
    updateMarker,
    markerData,
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
        <button type="submit" className="new-event__submit submit-btn">Save</button>
        or
        <a href="#!" className="new-event__cancel cancel-btn">Cancel</a>
      </section>
    </form>
  )
}
