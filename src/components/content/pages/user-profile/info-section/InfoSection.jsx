import React from 'react';

import Gear from '../../../../../constants/gear/gear-helper';

import './info-section.css';

export default function InfoSection({ info, title }) {
  const infoToRender = Object.entries(info);

  return (
    <div className="user-profile__section-wrap">
      <h3 className="user-profile__gear-subtitle user-profile-subtitle">{title}:</h3>

      {infoToRender.map((field) => (
        Gear.UNUSEFUL_FIELDS.includes(field[0])
          ? ""
          : <div key={field[0]} className="user-profile__field-field user-profile__field">
            <span className="my-profile__field-title">{field[0][0].toUpperCase() + field[0].substring(1)}:</span>
            {field[1]
              ? <span className="field-field__value  field-value_noselect my-profile__field-value">{field[1]}</span>
              : <span className="field-field__value my-profile__field-value-empty field-value_noselect my-profile__field-value">empty</span>
            }
          </div>
      ))}
    </div>
  )
}