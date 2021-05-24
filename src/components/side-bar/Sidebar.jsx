import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import SidebarLogo from './sidebar-logo/SidebarLogo'
import SidebarProfile from './sidebar-profile/SidebarProfile';

import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className='sidebar__nav'>
      <header className='header'>
        <nav className='header__nav'>
          <SidebarLogo />
          <ul className='sidebar__elements'>

            <SidebarProfile />

            <li className='sidebar__nav_item'>
              <a href="#!" className='nav_item__link link'>Workshop</a>
            </li>
            <li className='sidebar__nav_item'>
              <Link to="/settings" className='nav_item__link link'>Settings</Link>
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

