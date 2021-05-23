import React from 'react';
import Gear from '../../../../../constants/gear/gear-helper';

export default function UserGear({ gear }) {
  const gearToRender = Object.entries(gear);

  return (
    <div>
      {gearToRender.map((bike) => (
        Gear.UNUSEFUL_FIELDS.includes(bike[0])
          ? ""
          : <div key={bike[0]}>
            <span>{bike[0]}</span>
            <span>{bike[1]}</span>
          </div>
      ))}
    </div>
  )
}
