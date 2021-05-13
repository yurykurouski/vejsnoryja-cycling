import React from 'react';
import Icon from '@material-ui/core/Icon';
import './event-card-option.css';

export default function EventCardOption(props) {
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
