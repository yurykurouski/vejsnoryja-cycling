import React from 'react';
import SidebarLogo from './sidebar-logo/SidebarLogo'
import './Sidebar.css';
import SidebarProfile from "./sidebar-profile/SidebarProfile";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
              <Link to="/settings/my-profile" className='nav_item__link link'>Settings</Link>
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

