import React, { useEffect } from 'react';
import Gear from '../../../../../constants/gear/gear';
import { useStore } from 'react-redux';

export default function UserGear({ getUserActiveGear, userId }) {
  useEffect(() => {
    getUserActiveGear(userId);
  }, [getUserActiveGear, userId]);

  const store = useStore();
  const gear = store.getState().gear.gear;

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
