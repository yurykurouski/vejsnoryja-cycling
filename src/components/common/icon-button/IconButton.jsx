import React from 'react';
import Icon from '@material-ui/core/Icon';
import './icon-button.css';

export default function IconButton(props) {
  const { onClick, btnTitle, btnIcon } = props;

  return (
    <button
      className="event-card__option"
      type="button"
      title={btnTitle}
      onClick={onClick}
    >
      <Icon
        className="option__icon"
      >{btnIcon}</Icon>
    </button>
  )
}
