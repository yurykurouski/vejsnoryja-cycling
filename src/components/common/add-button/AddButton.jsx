import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import NewEvent from './actions/NewEvent';
import AddButtonActions from '../../../constants/components-fields/add-button-actions';

import './add-button.css';

export default function AddButton() {
  const [clickedClass, setClickedClass] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const clicked = clickedClass ? '' : 'add-btn-icon_clicked';

    setClickedClass(clicked)
    setIsExpanded(!isExpanded);
  }

  const handleClickAway = () => {
    setClickedClass('');
    setIsExpanded(false);
  }

  return (
    <div className='add-btn_container'>

      {AddButtonActions.ACTIONS.map((action) => (
        <NewEvent
          key={action.name}
          name={action.name}
          expanded={isExpanded}
          type={action.type}
          linkTo={action.linkTo}
        />
      ))}

      <ClickAwayListener onClickAway={handleClickAway}>
        <button className='add-btn' onClick={handleClick}>
          <svg className={`add-btn__add-icon ${ clickedClass }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
      </ClickAwayListener>

    </div>
  )
}
