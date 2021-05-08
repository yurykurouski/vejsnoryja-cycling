import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from "../../../../store/current-user/actions";

function UserProfile(props) {
  const { logoutUser } = props;

  return (
    <div className='content__user-profile'>
      <button onClick={logoutUser}>Sign out</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(UserProfile);
