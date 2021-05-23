import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuthenticated, userId, path, restricted, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated && restricted
        ? <Redirect to={`profile/${ userId }/last-activities`} />
        : <Component {...props} />
    )} />
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userId: state.currentUser.user
  }
}

export default connect(mapStateToProps)(PublicRoute);