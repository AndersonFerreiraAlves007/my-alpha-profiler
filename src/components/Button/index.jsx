import React from 'react'

const Button = ({ btnType, btnName, onClickHandler }) => {
  return (
    <button type={btnType} onClick={onClickHandler}>
      {btnName}
    </button>
  )
}

export default Button
