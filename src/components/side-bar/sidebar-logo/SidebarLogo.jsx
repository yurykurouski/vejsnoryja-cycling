import React from 'react';
import { Link } from "react-router-dom";
import './SidebarLogo.css';

export default function SidebarLogo() {
  return (
    <Link to='/'>
    <div className='logo_container' title='Go to main'>
      <div className='logo'></div>
      </div>
    </Link>
  );
}