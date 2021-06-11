import React, { useState } from 'react';
import { Icon } from '@material-ui/core';

import themeService from '../../../services/theme-service';

import './theme-toggler.css';

export default function SidebarToggler() {
  const [currentSchema, setCurrentSchema] = useState(localStorage.getItem('currentSchema'));

  const toggleTheme = () => {
    themeService.toggleTheme();

    setCurrentSchema(localStorage.getItem('currentSchema'));
  };

  return (
    <div className="theme-toggler-wrap" role="button" onClick={toggleTheme} tabIndex={0} title="Toggle theme">
      <Icon className={`theme-toggler-icon theme-toggler-icon_${ currentSchema }`} fontSize="small">
        {currentSchema === 'light' ? 'dark_mode' : 'light_mode'}
      </Icon>
    </div>
  );
}
