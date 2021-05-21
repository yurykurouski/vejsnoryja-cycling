import React from 'react';
import Icon from '@material-ui/core/Icon';
import './icon-button.css';

export default function IconButton(props) {
  const { onClick, btnTitle, btnIcon, color } = props;

  return (
    <button
      className="event-card__option"
      type="button"
      title={btnTitle}
      onClick={onClick}
      style={{ 'color': `${color}`}}
    >
      <Icon
        className="option__icon"
      >{btnIcon}</Icon>
    </button>
  )
}
