import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addEvent } from "../../../../store/events/actions";
import NewEventForm from "./new-event-form/NewEventForm";
import './new-event-page.css'

class NewEventPage extends Component {
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
        .date()
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
    const { currentUser } = this.props;
    const { markerData } = this.state;

    return (
      <div className="content__new-event first-layer-card">
        <h2 className="new-event__heading card-heading">Create new Event</h2>
        <Formik
          initialValues={{
            title: '',
            adress: '',
            description: '',
            date: "2021-03-25T11:00",
            terrain: 'Mostly flat',
            level: 'Casual',
            distance:'',
            author: currentUser.user,
            markerData: markerData
          }}
          onSubmit={this.submitForm}
          validationSchema={this.validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <NewEventForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}

              addMarker={this.addMarker}
              updateMarker={this.updateMarker}
              markerData={markerData}

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

export default connect(mapStateToProps, mapDispatchToProps)(NewEventPage);