import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  path,
  ...rest
}) => (
  <Route {...path}>
    {isAuthenticated
      ? <Component {...rest} />
      : <Redirect to="/sign-in" />}
  </Route>
);

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
