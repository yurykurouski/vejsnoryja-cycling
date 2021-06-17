/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

export default function EventDescription({
  onChange,
  value,
}) {
  return (
    <label className="input__label" htmlFor="description">
      Description

      <TextareaAutosize
        name="description"
        id="description"
        onChange={onChange}
        value={value}
        className="form__input form__input_description"
        minRows={2}
        maxRows={8}
      />

    </label>
  );
}

EventDescription.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
