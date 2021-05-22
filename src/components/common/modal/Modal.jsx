import React, { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { ESCAPE_KEYCODE } from "../../../constants";

import "./modal.css";

export default function Modal(
  {
    component: Component,
    heading,
    handleCloseModal,
  }
) {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');
  el.classList.add('fade-layer');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    }
  });

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === ESCAPE_KEYCODE) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return ReactDom.createPortal(
    <ClickAwayListener onClickAway={handleCloseModal}>
      <div className="modal-window first-layer-card">
        <h3 className="modal-window__heading">{heading}</h3>

        {Component}

      </div>
    </ClickAwayListener>,
    el
  );
}
