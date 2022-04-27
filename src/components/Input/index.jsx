import React from 'react'

const Input = ({ inputString, inputPlaceholder, inputValue, inputOnchange }) => {
  return (
        <input
            type={inputString}
            name={inputString}
            id={inputString}
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={inputOnchange}/>

  )
}

export default Input
