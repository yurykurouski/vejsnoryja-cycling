import React from 'react';

export default function ModalDialog({ onYes, onNo }) {
  return (
    <span className="modal-window__main modal-dialog first-layer-card_hovered">
      <button onClick={onYes} className="modal-window__button submit-btn accept-button">Yes</button>
      <button onClick={onNo} className="modal-window__button submit-btn decline-button">No</button>
    </span>
  );
}
