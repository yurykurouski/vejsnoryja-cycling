import React from 'react';
import './NewEvent.css'

export default function NewEvent(props) {
  const { name, expanded } = props;
  

  return (
    <button className={`add-btn__action-btn ${expanded ? 'action-btn_active' : ''}`} new-event-btn event-name={name}>
      <svg className='action_btn__icon new-event-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 17v4h4l11-11-4-4L3 17zm3 2H5v-1l9-9 1 1-9 9zM21 6l-3-3h-1l-2 2 4 4 2-2V6z" />
      </svg>
    </button>
  )
}