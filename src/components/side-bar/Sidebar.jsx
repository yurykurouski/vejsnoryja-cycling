import React from 'react';
import SidebarLogo from './sidebar-logo/SidebarLogo'
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className='sidebar__nav'>
      <SidebarLogo />
      <header>
        <nav>
          <ul className='sidebar__elements'>
            <li className='sidebar__nav_item'>
              <a href="#!" className='nav_item__link link'>Profile</a>
            </li>
            <li className='sidebar__nav_item'>
              <a href="#!" className='nav_item__link link'>Workshop</a>
            </li>
            <li className='sidebar__nav_item'>
              <a href="#!" className='nav_item__link link'>Settings</a>
            </li>
            <li className='sidebar__nav_item'>
              <a href="#!" className='nav_item__link link'>Smthng else</a>
            </li>
          </ul>
        </nav>
      </header>
    </aside>
  )
}