import React from 'react';
import './FloatCard.css'
import FloatElement from "./float-element/FloatElement";


export default function FloatCard() {
  return (
    <aside className='float-card'>
      <ul>
        <FloatElement name='Strava'/>
        <FloatElement name='Bot'/>
        <FloatElement name='Join club'/>
        <FloatElement name='Instagramm'/>
        <FloatElement name='GitHub'/>
      </ul>
    </aside>
  )
}
