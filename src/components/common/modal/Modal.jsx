import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Formik } from 'formik';

import Input from '../input/Input';
import './modal.css';

export default function Modal({ heading, fields, handleCloseModal, handleModalSubmit, validationSchema, btnText }) {
  return (
    <div className="fade-layer">
      <ClickAwayListener onClickAway={handleCloseModal}>
        <div className="modal-window first-layer-card">
          <h3 className="modal-window__heading">{heading}</h3>

          <Formik
            initialValues={{ ...fields.value }}
            onSubmit={handleModalSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <form className="modal-window__main second-layer-card" onSubmit={handleSubmit}>

                {fields.map(field => (
                  <Input {...field}
                    value={values[field.name]}
                    handleChange={handleChange}
                    key={field.name}
                  />
                ))}

                <button type="submit" className="submit-btn">{btnText}</button>
              </form>)
            }
          </Formik>
        </div>
      </ClickAwayListener>
    </div>
  )
}
