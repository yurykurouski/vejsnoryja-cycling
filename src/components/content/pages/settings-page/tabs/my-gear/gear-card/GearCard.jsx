import React from 'react';
import SettingsFields from '../../../../../../../constants/settings-fields';

import './gear-card.css';

export default function GearCard({ handleModalCardOpen }) {
  const gearToRender = Object.entries(handleModalCardOpen());

  return (
    <div className="modal-window__main modal-form second-layer-card">

      {gearToRender.map((gear) => (
        (SettingsFields.FIELDS_FILTER.includes(gear[0]) || gear[1] === '')
          ? ''
          :
          <div key={gear._id} className="modal__gear-field">
            <span className="gear-field__key">{gear[0][0].toUpperCase() + gear[0].substring(1)}:</span>
            <span className="gear-field__value">{gear[1]}</span>
          </div>
      ))}

    </div>
  )
}
