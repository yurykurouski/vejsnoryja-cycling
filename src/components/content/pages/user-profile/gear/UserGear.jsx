import React, { useEffect } from 'react';


export default function UserGear({ getUserActiveGear, userId }) {
  useEffect(() => {
    getUserActiveGear(userId);
  }, [getUserActiveGear, userId]);

  return (
    <div>
      Gear
    </div>
  )
}
