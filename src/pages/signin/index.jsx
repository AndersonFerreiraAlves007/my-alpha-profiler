import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context.jsx'
import * as S from './styles.js'
import Button from '../../components/Button/index.jsx'
import Input from '../../components/Input/index.jsx'

const SignInPage = () => {
  const [loginValues, setLoginValues] = useState({ email: '', password: '' })
  const { email, password } = loginValues
  const { handleLogin } = useContext(AuthContext)
  const handleLoginValues = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLoginValues({ ...loginValues, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      alert('Vazio')
    } else {
      console.log({ email, password })
      handleLogin(email, password)
    }
  }

  return (
    <S.Div className="login">
      <h2 className="title">Sign In</h2>
      <S.Form onSubmit={handleSubmit} className="from">
        <S.Div className="field">

          <Input
            inputString="email"
            inputPlaceholder="E-mail"
            inputValue={email}
            inputOnchange={handleLoginValues}
          />
          <Input
            inputString="password"
            inputPlaceholder="Senha"
            inputValue={password}
            inputOnchange={handleLoginValues}
          />
        </S.Div>
        <S.Div className="actions">
          <Button
            btnType="submit"
            btnName="Entrar"
            // onClickHandler={handleSubmit}
          />
        </S.Div>
      </S.Form>
    </S.Div>
  )
}

export default SignInPage
