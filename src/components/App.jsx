import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Content from './content/Content';
import Sidebar from './side-bar/Sidebar';
import themeService from '../services/theme-service';
import FloatCard from './common/float-card/FloatCard';
import AddButton from './common/add-button/AddButton';
import { authUser } from '../store/current-user/actions';
import { getUserInfo } from '../store/user-info/actions';
import FiltersPanel from './common/filters-panel/FiltersPanel';

import './app.css';

function App({
  currentUser,
  authUser,
  getUserInfo,
}) {
  const { isAuthenticated, userId } = currentUser;
  const token = localStorage.getItem('token');

  useEffect(() => {
    themeService.setTheme();
    if (!isAuthenticated && token) {
      authUser();
      getUserInfo(userId);
    }
  }, [isAuthenticated, authUser, token, getUserInfo, userId]);

  return (
    <div className="app">
      <div className="sidebar-wrap">
        <Sidebar />
        <AddButton />
      </div>
      <Content />

      <aside className="float-cards">
        <FloatCard />

        <FiltersPanel />
      </aside>

    </div>
  );
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
  authUser: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
