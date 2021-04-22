import React from 'react';
import './NewEvent.css'
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";


export default function NewEvent(props) {
  const { name, expanded, type, linkTo } = props;

  return (
    <Link to={`/${linkTo}`}>
    <button className={`add-btn__action-btn ${expanded ? 'action-btn_active' : ''}`} new-event-btn event-name={name}>
      <Icon>{type}</Icon>
      </button>
    </Link>
  )
}