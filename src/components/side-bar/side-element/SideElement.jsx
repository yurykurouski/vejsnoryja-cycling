import React from 'react'
import './SideElement.css'

export default function SideElement(props) {
  const { name } = props;

  return (
    <li className='sidebar__nav_item'>{name}</li>
  )
}
