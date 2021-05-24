import React from 'react'
import PropTypes from 'prop-types';

import './validation-err-msg.css';

export default function ValidationErrMsg({ errorMsg }) {

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
