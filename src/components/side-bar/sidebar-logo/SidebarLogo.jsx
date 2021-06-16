import React from 'react';
import { Link } from 'react-router-dom';

import './sidebarLogo.css';

export default function SidebarLogo() {
  return (
    <Link to="/" className="header__logo" title="Go to main" />
  );
}
