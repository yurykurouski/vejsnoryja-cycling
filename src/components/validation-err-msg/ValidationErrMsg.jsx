import React from 'react'

export default function ValidationErrMsg(props) {
  const {errorMsg} = props
  return (
    <div>
      {errorMsg}
    </div>
  )
}
