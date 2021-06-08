import React from 'react';
import PropTypes from 'prop-types';

export default function ModalDialog({ onYes, onNo }) {
  return (
    <span className="modal-window__main modal-dialog first-layer-card_hovered">
      <button onClick={onYes} type="button" className="modal-window__button submit-btn accept-button">Yes</button>
      <button onClick={onNo} type="button" className="modal-window__button submit-btn decline-button">No</button>
    </span>
  );
}

ModalDialog.propTypes = {
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
};
