import React from 'react';
import './NewEvent.css'
import Icon from '@material-ui/core/Icon';

export default function NewEvent(props) {
  const { name, expanded, type } = props;

  return (
      <button className={`add-btn__action-btn ${expanded ? 'action-btn_active' : ''}`} new-event-btn event-name={name}>
        <Icon>{type}</Icon>
      </button>
  )
}