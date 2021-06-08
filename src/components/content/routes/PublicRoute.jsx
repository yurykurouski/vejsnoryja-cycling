import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  userId,
  restricted,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated && restricted
        ? <Redirect to={`profile/${ userId }/last-activities`} />
        : <Component {...props} />
    )}
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated,
    userId: state.currentUser.user,
  };
}

PublicRoute.defaultProps = {
  userId: null,
};

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  restricted: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(PublicRoute);
