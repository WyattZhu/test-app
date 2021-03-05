import React from 'react'
import './style.css'

const ErrorBoundray = function (props) {
  const ErrorMsg = () => {
    <h2>errorMsg</h2>
  }

  let isOK = true
  return <>{ isOK ? props.children : <ErrorMsg /> }</>
}

export default ErrorBoundray