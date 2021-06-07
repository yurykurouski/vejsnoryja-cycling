import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

import './new-event.css';

export default function NewEvent(props) {
  const { name, expanded, type, linkTo } = props;

  return (
    <Link to={`/${ linkTo }`} className={`add-btn__action-btn ${ expanded ? 'action-btn_active' : '' }`} data-event-name={name}>
      <Icon>{type}</Icon>
    </Link>
  );
}

NewEvent.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired
};
