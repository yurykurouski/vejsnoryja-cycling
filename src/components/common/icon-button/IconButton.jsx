import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

import './icon-button.css';

export default function IconButton({
  onClick,
  btnTitle,
  btnIcon,
  color,
}) {
  return (
    <button
      className="event-card__option"
      type="button"
      title={btnTitle}
      onClick={onClick}
      style={{ color: `${ color }` }}
    >
      <Icon
        className="option__icon"
      >
        {btnIcon}
      </Icon>
    </button>
  );
}

IconButton.defaultProps = {
  color: undefined,
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnTitle: PropTypes.string.isRequired,
  btnIcon: PropTypes.string.isRequired,
  color: PropTypes.string,
};
