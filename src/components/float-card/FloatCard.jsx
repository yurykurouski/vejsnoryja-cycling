import React from 'react';
import './FloatCard.css'

export default function FloatCard() {
  return (
    <aside className='float-card'>
      <ul className="float-card__elements">
        <li className='float-card__element'>
          <a href='#!' className='float-card__link link'>Strava</a>
        </li>
        <li className='float-card__element'>
          <a href='#!' className='float-card__link link'>Bot</a>
        </li>
        <li className='float-card__element'>
          <a href='#!' className='float-card__link link'>Join club</a>
        </li>
        <li className='float-card__element'>
          <a href='#!' className='float-card__link link'>Instagramm</a>
        </li>
        <li className='float-card__element'>
          <a href='#!' className='float-card__link link'>GitHub</a>
        </li>
      </ul>
    </aside>
  )
}
