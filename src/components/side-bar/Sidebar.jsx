import React from 'react'
import './Sidebar.css'
import SideElement from "./side-element/SideElement"

export default function Sidebar() {
  return (
    <aside className='sidebar__nav'>
      <ul className='sidebar__elements'>
        <SideElement name='Profile' />
        <SideElement name='Workshop' />
        <SideElement name='Smthng else' />
        <SideElement name='Smthng else' />
      </ul>
    </aside>
  )
}
