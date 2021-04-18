import React, { Component } from 'react';
import './Main.css'
import AddButton from './add-button/AddButton';

export default class Main extends Component {

  render() {

    return (
      <div className='main'>
        <div className='main__content'>
          <AddButton />
        </div>
      </div>
    )
  }
}
