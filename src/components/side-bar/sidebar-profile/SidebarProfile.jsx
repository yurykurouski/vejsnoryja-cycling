import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarProfile(props) {

  return (

    <li className='sidebar__nav_item'>

      <Link to='/profile' className='nav_item__link link'>Login/Register</Link>

    </li>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(SidebarProfile);