import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarProfile({ isAuthenticated, userId, setActiveLinkClass }) {
  return (
    <li className="sidebar__nav-item">

      {isAuthenticated
        ? <Link to={`/profile/${ userId }/last-activities`} className={setActiveLinkClass('profile')}>Profile</Link>
        : <Link to="/sign-in" className={setActiveLinkClass('sign-in')}>Sign-in</Link>}

    </li>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userId: state.currentUser.user,
  };
}

SidebarProfile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  setActiveLinkClass: PropTypes.func.isRequired,
};

SidebarProfile.defaultProps = {
  userId: null,
};

export default connect(mapStateToProps)(SidebarProfile);
