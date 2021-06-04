import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Content from './content/Content';
import Sidebar from './side-bar/Sidebar';
import FloatCard from './common/float-card/FloatCard';
import AddButton from './common/add-button/AddButton';
import { authUser } from '../store/current-user/actions';

import './app.css';
import { getUserInfo } from '../store/user-info/actions';

function App(props) {
  const isAuthenticated = props.currentUser.isAuthenticated;
  const userId = props.currentUser.userId;
  const { authUser, getUserInfo } = props;

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated && token) {
      authUser();
      getUserInfo(userId)
    }
  }, [isAuthenticated, authUser, token, getUserInfo, userId]);

  return (
    <div className='app'>
      <Sidebar />

      <Content />

      <FloatCard />
      <AddButton />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
    getUserInfo: (id) => dispatch(getUserInfo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);