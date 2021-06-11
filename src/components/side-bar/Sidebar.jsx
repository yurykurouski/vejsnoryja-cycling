import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';

import SidebarLogo from './sidebar-logo/SidebarLogo';
import SidebarProfile from './sidebar-profile/SidebarProfile';

import './sidebar.css';
import SidebarToggler from './sidebar-theme-toggler/SidebarToggler';

export default function Sidebar() {
  const currentPage = useRouteMatch('/:page')?.params.page;

  const setActiveLinkClass = (page) => `nav-item__link ${ currentPage === page ? 'link_active' : '' } link`;

  return (
    <aside className="sidebar__nav">
      <header className="header">
        <nav className="header__nav">
          <SidebarLogo />
          <ul className="sidebar__elements">

            <SidebarProfile setActiveLinkClass={setActiveLinkClass} />

            <li className="sidebar__nav-item">
              <a href="#!" className={setActiveLinkClass('worksop')}>Workshop</a>
            </li>
            <li className="sidebar__nav-item">
              <Link to="/settings" className={setActiveLinkClass('settings')}>Settings</Link>
            </li>
            <li className="sidebar__nav-item">
              <SidebarToggler />
            </li>
          </ul>
        </nav>
      </header>
    </aside>
  );
}
