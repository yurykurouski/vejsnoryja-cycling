import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from "../../../../store/current-user/actions";
import './user-profile.css';

function UserProfile(props) {
  const { logoutUser } = props;

  return (
    <div className="content__user-profile first-layer-card">
      <span className="user-profile__header">
        <h2 className="user-profile__heading card-heading">Your profile</h2>
        <button onClick={logoutUser} className="user-profile__logout-btn submit-btn sign-out-btn">Sign out</button>
      </span>
      
      <div className="user-profile__main second-layer-card">
        <span className="user-profile__tabs">
          <span className="user-profile__tab user-profile__tab_active tab_activities">Last activities</span>
          <span className="user-profile__tab tab_gear">Your gear</span>
          <span className="user-profile__tab tab_settings">Profile settings</span>
        </span>
        
      </div>
      
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(UserProfile);
