import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarProfile({ isAuthenticated, userId }) {
  return (
    <li className='sidebar__nav_item'>

      {isAuthenticated
        ? <Link to={`/profile/${ userId }/last-activities`} className='nav_item__link profile_logined link'>Profile</Link>
        : <Link to='/sign-in' className='nav_item__link profile_notlogined link'>Sign-in</Link>
      }

    </li>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userId: state.currentUser.user
  }
}

export default connect(mapStateToProps)(SidebarProfile);