import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, path, ...rest }) => {
  return (
    <Route {...path}>
      {isAuthenticated
        ? <Component {...rest} />
        : <Redirect to="/sign-in" />}
    </Route >
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
  }
}

export default connect(mapStateToProps)(PrivateRoute);