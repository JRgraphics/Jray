import React from 'react'

const Button = ({
  buttonClassName = '',
  buttonContent = '',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={'button ' + buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  )
}
export default Button
