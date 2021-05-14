import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Content from './content/Content';
import Sidebar from './side-bar/Sidebar';
import FloatCard from './common/float-card/FloatCard';
import AddButton from './common/add-button/AddButton';
import { authUser } from "../store/current-user/actions";

import './app.css';

function App(props) {
  const { isAuthenticated, authUser } = props;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated && token) {
      authUser();
    }
  }, [isAuthenticated, token, authUser]);

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
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);