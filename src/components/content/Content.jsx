import React, { Component } from 'react';
import './Content.css'
import { Switch, Route } from 'react-router-dom';
import MainPage from "../pages/main-page/MainPage";
import NewEventPage from "../pages/new-event/NewEventPage";


export default class Content extends Component {

  render() {

    return (
      <div className='content'>
        <div className='content__wrap'>
          
          <Switch>
            <Route path='/' component={MainPage} exact/>
            <Route path='/new-event' component={NewEventPage}/>
          </Switch>

        </div>
      </div>
    )
  }
}
