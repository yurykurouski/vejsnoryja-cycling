import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import EventForm from './event-form/EventForm';
import { addEvent } from '../../../store/events/actions';

import './event-page.css';
import {
  EVENT_PAGE_MAX_ADRESS_LENGTH,
  EVENT_PAGE_MAX_TITLE_LENGTH,
  EVENT_PAGE_MAX_DISTANCE_LENGTH,
  EVENT_PAGE_MAX_DESCRIPTION_LENGTH,
  CURRENT_DATE,
} from '../../../constants';

function EventPage({
  saveEvent,
  event,
  currentUser,
}) {
  const [markerData, setMarkerData] = useState(null);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    title: Yup
      .string()
      .max(EVENT_PAGE_MAX_TITLE_LENGTH, 'Title is too long')
      .required('Title cannot be blank'),
    adress: Yup
      .string()
      .max(EVENT_PAGE_MAX_ADRESS_LENGTH, 'Adress is too long')
      .required('Adress cannot be blank'),
    date: Yup
      .date()
      .min(CURRENT_DATE, 'Date should not to be in past.'),
    description: Yup
      .string()
      .max(EVENT_PAGE_MAX_DESCRIPTION_LENGTH, 'Description is too long'),
    distance: Yup
      .number()
      .max(EVENT_PAGE_MAX_DISTANCE_LENGTH, 'Distance is too long')
      .required('Distance cannot be blank')
      .typeError('You must specify a number'),
  });
  const handleSubmit = (newEvent, actions) => {
    saveEvent({ ...newEvent, markerData, _id: event._id });

    actions.resetForm();
    history.goBack();
  };

  const addMarker = (event) => {
    const coords = event.latlng;

    setMarkerData({
      lat: coords.lat,
      lng: coords.lng,
    });
  };

  const updateMarker = (event) => {
    const coords = event.target.getLatLng();

    setMarkerData({
      lat: coords.lat,
      lng: coords.lng,
    });
  };
  console.log(CURRENT_DATE);
  return (
    <div className="content__new-event first-layer-card">
      <h2 className="new-event__heading card-heading">{event ? 'Edit event' : 'Create new Event'}</h2>
      <Formik
        initialValues={{
          title: event.title ? event.title : '',
          adress: event.adress ? event.adress : '',
          description: event.description ? event.description : '',
          date: event.date ? event.date : CURRENT_DATE,
          terrain: event.terrain ? event.terrain : 'Mostly flat',
          level: event.level ? event.level : 'Casual',
          distance: event.distance ? event.distance : '',
          author: currentUser.user,
          markerData: event.markerData ? event.markerData : markerData,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
        }) => (
          <EventForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            addMarker={addMarker}
            updateMarker={updateMarker}
            markerData={event.markerData ? event.markerData : markerData}
            errors={errors}
            touched={touched}
            title={values.title}
            adress={values.adress}
            date={values.date}
            terrain={values.terrain}
            level={values.level}
            description={values.description}
            distance={values.distance}
          />
        )}
      </Formik>
    </div>
  );
}

EventPage.defaultProps = {
  event: {},
};

EventPage.propTypes = {
  saveEvent: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  event: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
