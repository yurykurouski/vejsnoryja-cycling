import PropTypes from "prop-types";
import React from 'react'
import './validation-err-msg.css';

export default function ValidationErrMsg(props) {
  const {errorMsg} = props
  return (
    <div className="error-message">
      {errorMsg}
    </div>
  )
}

ValidationErrMsg.defaultProps = {
  errorMsg: ''
}

ValidationErrMsg.propTypes = {
  errorMsg: PropTypes.string
}
