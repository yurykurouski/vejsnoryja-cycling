import React, { useCallback, useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { ESCAPE_KEYCODE } from '../../../constants';

import './modal.css';

export default function Modal({
  heading,
  handleCloseModal,
  children,
}) {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');
  el.classList.add('fade-layer');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === ESCAPE_KEYCODE) {
        handleCloseModal();
      }
    },
    [handleCloseModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return ReactDom.createPortal(
    <ClickAwayListener onClickAway={handleCloseModal}>
      <div className="modal-window">
        <h3 className="modal-window__heading">{heading}</h3>

        {children}

      </div>
    </ClickAwayListener>,
    el,
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};
