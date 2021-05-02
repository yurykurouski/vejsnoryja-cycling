import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addEvent } from "../../../../store/events/actions";

import EventTitle from './new-event-inputs/EventTitle';
import EventAdress from './new-event-inputs/EventAdress';
import EventTerrain from './new-event-inputs/EventTerrain';
import EventLevel from './new-event-inputs/EventLevel';
import EventDescription from './new-event-inputs/EventDescription';
import EventDate from './new-event-inputs/EventDate';

class NewEventPage extends Component {
  constructor() {
    super();


    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(newEvent) {
    const { addEvent } = this.props;

    addEvent(newEvent);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className='content__new-event'>
        <h3>New event page</h3>
        <h4>Форма данные собирает, но в стейт не записывает почему-то. Серв еще тоже не дописан для новых ивентов</h4>
        <Formik
          initialValues={{
            title: '',
            adress: '',
            description: '',
            date: '',
            terrain: '',
            level: '',
            author: currentUser.user
          }}
          onSubmit={this.submitForm}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form
              onSubmit={handleSubmit}
              className='new-event__form'
            >

              <EventTitle
                onChange={handleChange}
                value={values.title}
              />

              <EventAdress
                onChange={handleChange}
                value={values.adress}
              />

              <EventDate
                value={values.date}
                onChange={handleChange}
              />

              <EventTerrain
                value={values.terrain}
                onChange={handleChange}
              />

              <EventLevel
                value={values.level}
                onChange={handleChange}
              />

              <EventDescription
                value={values.description}
                onChange={handleChange}
              />

              <section>
                <button type="submit">Save Event</button> or
                Cancel
              </section>

            </form>
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