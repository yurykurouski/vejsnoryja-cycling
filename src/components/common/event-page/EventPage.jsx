import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addEvent } from "../../../store/events/actions";
import EventForm from './event-form/EventForm'
import './event-page.css'

class EventPage extends Component {
  constructor() {
    super();

    this.state = {
      markerData: null
    }

    this.validationSchema = Yup.object().shape({
      title: Yup
        .string()
        .required('Title cannot be blank'),
      adress: Yup
        .string()
        .required('Adress cannot be blank'),
      date: Yup
        .date(),
      distance: Yup
        .number()
        .typeError('You must specify a number'),
    })
  }

  submitForm = (newEvent, actions) => {
    const { addEvent } = this.props;
    const { markerData } = this.state;

    addEvent({ ...newEvent, markerData: markerData });
    actions.resetForm();
  }

  addMarker = (event) => {
    const coords = event.latlng;

    this.setState({
      markerData: {
        lat: coords.lat,
        lng: coords.lng
      }
    })
  };

  updateMarker = (event) => {
    const coords = event.target.getLatLng();

    this.setState({
      markerData: {
        lat: coords.lat,
        lng: coords.lng
      }
    })
  };

  render() {
    const { currentUser, event = '' } = this.props;
    const { markerData } = this.state;

    return (
      <div className="content__new-event first-layer-card">
        <h2 className="new-event__heading card-heading">{event ? "Edit event" : "Create new Event"}</h2>
        <Formik
          initialValues={{
            title: event.title ? event.title : "",
            adress: event.adress ? event.adress : "",
            description: event.description ? event.description : "",
            date: event.date ? event.date : "2021-03-25T11:00",
            terrain: event.terrain ? event.terrain : "Mostly flat",
            level: event.level ? event.level : "Casual",
            distance: event.distance ? event.distance : "",
            author: currentUser.user,
            markerData: event.markerData ? event.markerData : markerData
          }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <EventForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}

              addMarker={this.addMarker}
              updateMarker={this.updateMarker}
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
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);