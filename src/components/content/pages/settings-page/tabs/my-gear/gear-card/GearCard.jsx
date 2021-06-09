import React from 'react';
import PropTypes from 'prop-types';

import Gear from '../../../../../../../constants/gear/gear-helper';

import './gear-card.css';

export default function GearCard({ handleModalCardOpen }) {
  const gearToRender = Object.entries(handleModalCardOpen());

  return (
    <div className="modal-window__main modal-form second-layer-card">

      {gearToRender.map((gear) => (
        (Gear.UNUSEFUL_FIELDS.includes(gear[0]) || gear[1] === '')
          ? ''
          : <div key={gear[0]} className="modal__gear-field">
            <span className="my-profile__field-title">{`${ gear[0][0].toUpperCase() }${ gear[0].substring(1) }:`}</span>
            <span className="field-field__value field-value_noselect my-profile__field-value">{gear[1]}</span>
          </div>
      ))}

    </div>
  );
}

GearCard.propTypes = {
  handleModalCardOpen: PropTypes.func.isRequired,
};
