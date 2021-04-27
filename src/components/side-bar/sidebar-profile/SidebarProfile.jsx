import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarProfile(props) {
  const { isAuthenticated } = props;

  return (

    <li className='sidebar__nav_item'>

      {isAuthenticated
        ? <Link to='/profile' className='nav_item__link link'>Profile</Link>
        : <Link to='/login' className='nav_item__link link'>Login/register</Link>
      }

    </li>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps)(SidebarProfile);