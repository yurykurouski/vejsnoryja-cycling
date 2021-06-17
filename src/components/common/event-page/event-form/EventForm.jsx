import React from 'react';
import PropTypes from 'prop-types';

import Distance from '../event-form-inputs/Distance';
import EventDate from '../event-form-inputs/EventDate';
import EventLevel from '../event-form-inputs/EventLevel';
import EventTitle from '../event-form-inputs/EventTitle';
import EventAdress from '../event-form-inputs/EventAdress';
import EventTerrain from '../event-form-inputs/EventTerrain';
import EventDescription from '../event-form-inputs/EventDescription';

import EventMap from '../../event-card/event-card-map/EventMap';

import './event-form.css';

export default function EventForm({
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
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="new-event__form second-layer-card"
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
          errors={errors.date}
          touched={touched.date}
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
        isDraggable
        mainClass="new-event__map"
      />

      <section className="new-event__controls form__controls">
        <button type="submit" className="new-event__submit submit-btn">Save</button>
        or
        <a href="#!" className="new-event__cancel cancel-btn">Cancel</a>
      </section>
    </form>
  );
}

EventForm.defaultProps = {
  markerData: null,
};

EventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  updateMarker: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  distance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  markerData: PropTypes.object,
};
