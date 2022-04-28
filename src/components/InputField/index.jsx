import React from 'react'
import Input from '../Input'

const InputField = ({ email, password, setEmail, setPassword }) => {
  const inputEmail = (e) => {
    setEmail(e.target.value)
  }
  const inputPassword = (e) => {
    setPassword(e.target.value)
  }
  return (
        <div>
            <Input
            inputString="email"
            inputPlaceholder="E-mail"
            inputValue={email}
            inputOnchange={inputEmail}/>
          <Input
            inputString="password"
            inputPlaceholder="Senha"
            inputValue={password}
            inputOnchange={inputPassword}/>

        </div>
  )
}

export default InputField
