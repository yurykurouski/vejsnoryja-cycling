import React, { Component } from 'react';
import NewEvent from "./actions/NewEvent";
import './AddButton.css';

export default class AddButton extends Component {
  constructor() {
    super();

    this.state = {
      clickedClass: '',
      expanded: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clicked = this.state.clickedClass ? '' : 'add-btn-icon_clicked';

    this.setState({
      clickedClass: clicked,
      expanded: !this.state.expanded
    });
  };


  render() {
    const { clickedClass, expanded } = this.state;

    return (
      <div className='add-btn_container'>
        <NewEvent name='New event' expanded={expanded} />
        <NewEvent name='New event' expanded={expanded} />
        <button className='add-btn' onClick={this.handleClick}>
          <svg className={`add-btn__add-icon ${clickedClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
      </div>
    )
  }
}