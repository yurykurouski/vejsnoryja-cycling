import React from 'react';
import { Formik } from "formik";

import Input from '../../input/Input';

export default function ModalForm({ fields, handleModalSubmit, validationSchema, btnText }) {
  const getValues = () => {
    let vals = {};

    fields.forEach((el) => {
      vals[el.name] = el.value;
    });
    return vals;
  };

  return (
    <Formik
      initialValues={getValues()}
      onSubmit={handleModalSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <form
          className="modal-window__main modal-form second-layer-card"
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <Input
              {...field}
              value={values[field.name]}
              handleChange={handleChange}
              key={field.name}
              error={errors[field.name]}
              touched={values}
            />
          ))}

          <button type="submit" className="modal__submit-btn submit-btn">
            {btnText}
          </button>
        </form>
      )}
    </Formik>
  )
}
