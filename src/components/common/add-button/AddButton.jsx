import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import NewEvent from "./actions/NewEvent";
import AddButtonActions from '../../../constants/add-button-actions';
import './add-button.css';

export default class AddButton extends Component {
  constructor() {
    super();

    this.state = {
      clickedClass: '',
      expanded: false
    }
  }

  handleClick = () => {
    const clicked = this.state.clickedClass ? '' : 'add-btn-icon_clicked';

    this.setState({
      clickedClass: clicked,
      expanded: !this.state.expanded
    });
  };

  handleClickAway = () => {
    this.setState({
      clickedClass: '',
      expanded: false
    });
  }

  render() {
    const { clickedClass, expanded } = this.state;

    return (
      <div className='add-btn_container'>

        {AddButtonActions.ACTIONS.map((action) => (
          <NewEvent
            key={action.name}
            name={action.name}
            expanded={expanded}
            type={action.type}
            linkTo={action.linkTo}
          />
        ))}

        <ClickAwayListener onClickAway={this.handleClickAway}>
          <button className='add-btn' onClick={this.handleClick}>
            <svg className={`add-btn__add-icon ${ clickedClass }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </ClickAwayListener>

      </div>
    )
  }
}