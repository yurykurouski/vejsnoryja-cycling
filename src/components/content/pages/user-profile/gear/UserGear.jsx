import React from 'react';

import Gear from '../../../../../constants/gear/gear-helper';

import './user-gear.css';

export default function UserGear({ gear }) {
  const gearToRender = Object.entries(gear);

  return (
    <>
      <h3 className="user-profile__gear-subtitle user-profile-subtitle">Gear:</h3>
      <div className="user-profile__gear-wrap">
        {gearToRender.map((gear) => (
          Gear.UNUSEFUL_FIELDS.includes(gear[0])
            ? ""
            : <div key={gear[0]} className="user-profile__gear-field user-profile__field">
              <span className="my-profile__field-title ">{gear[0][0].toUpperCase() + gear[0].substring(1)}:</span>
              <span className="gear-field__value my-profile__field-value">{gear[1]}</span>
            </div>
        ))}
      </div>
    </>
  )
}
