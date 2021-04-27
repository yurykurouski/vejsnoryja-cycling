import React, { Component } from 'react';
import './Content.css'
import { Switch, Route } from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import NewEventPage from "./pages/new-event/NewEventPage";
import UserProfile from "./pages/user-profile/UserProfile";
import RegistrationPage from "./pages/auth/registration/RegistrationPage";
import LoginPage from "./pages/auth/login/LoginPage";

export default class Content extends Component {

  render() {

    return (
      <div className='content'>
        <div className='content__wrap'>
          
          <Switch>
            <Route path='/' component={MainPage} exact/>
            <Route path='/new-event' component={NewEventPage}/>
            <Route path='/profile' component={UserProfile}/>
            <Route path='/register' component={RegistrationPage}/>
            <Route path='/login' component={LoginPage}/>
          </Switch>

        </div>
      </div>
    )
  }
}
