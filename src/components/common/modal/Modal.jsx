import React, { useCallback, useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Formik } from 'formik';

import Input from '../input/Input';
import './modal.css';
import { ESCAPE_KEYCODE } from "../../../constants";

export default function Modal({ heading, fields, handleCloseModal, handleModalSubmit, validationSchema, btnText }) {
  const escFunction = useCallback((event) => {
    if (event.keyCode === ESCAPE_KEYCODE) {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const getValues = () => {
    let vals = {};

    fields.forEach(el => {
      vals[el.name] = el.value;
    })
    return vals;
  }

  return (
    <div className="fade-layer">
      <ClickAwayListener onClickAway={handleCloseModal}>
        <div className="modal-window first-layer-card">
          <h3 className="modal-window__heading">{heading}</h3>

          <Formik
            initialValues={getValues()}
            onSubmit={handleModalSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form className="modal-window__main second-layer-card" onSubmit={handleSubmit}>

                {fields.map((field) => (
                  <Input {...field}
                    value={values[field.name]}
                    handleChange={handleChange}
                    key={field.name}
                    error={errors[field.name]}
                    touched={values}
                  />
                ))}

                <button type="submit" className="modal__submit-btn submit-btn">{btnText}</button>
              </form>)
            }
          </Formik>
        </div>
      </ClickAwayListener>
    </div >
  )
}
