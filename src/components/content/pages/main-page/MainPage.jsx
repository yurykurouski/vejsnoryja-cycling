import React, { Component } from 'react'
import ActionStatus from '../../../../constants/action-status';
import Loader from '../../../common/loader/Loader'
import './main-page.css';

export default class MainPage extends Component {
  getEvents = () => {
    const { getAllEvents } = this.props;
    const events = getAllEvents();

    console.log(events);
  }

  render() {
    const { events, status } = this.props;

    return (
      <div className="content__main-page">
        <button onClick={this.getEvents}>Click</button>
        <h3>Здесь карточки с готовыми событиями</h3>

        {status === ActionStatus.LOADING && <Loader />}

      </div>
    );
  }
}
