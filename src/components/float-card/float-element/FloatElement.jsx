import React from 'react';
import './FloatElement.css';

export default function FloatElement(props) {
  const { name } = props;

  return (
    <li className='float-card__element'>
      {name}
    </li>
  )
}
