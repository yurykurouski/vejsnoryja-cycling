import PropTypes from "prop-types";
import React from 'react'

export default function ValidationErrMsg(props) {
  const {errorMsg} = props
  return (
    <div>
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
