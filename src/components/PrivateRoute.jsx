import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
  }
}

export default connect(mapStateToProps)(PrivateRoute);