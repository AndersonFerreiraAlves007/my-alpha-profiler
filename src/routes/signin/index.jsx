import React, { useState } from 'react'
import * as S from './styles.js'
import Button from '../../components/Button/index.jsx'
import Input from '../../components/Input/index.jsx'
// import InputField from '../../components/InputField/index.jsx'
const SignInPage = () => {
  /* const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 */
  const [loginValues, setLoginValues] = useState({ email: '', password: '' })
  const { email, password } = loginValues
  const handleLoginValues = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLoginValues({ ...loginValues, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      alert('Vazio')
    } else {
      console.log('submit', { email, password })
    }
  }

  return (
    <S.Div className='login'>
      <h2 className='title'>Sign In</h2>
      <S.Form onSubmit={handleSubmit} className='from'>
        <S.Div className='field'>
          {/* <InputField
            email={email} password={password}
            setEmail={setEmail} setPassword={setPassword}
          />
*/}
          <Input
            inputString="email"
            inputPlaceholder="E-mail"
            inputValue={email}
            inputOnchange={handleLoginValues}/>
          <Input
            inputString="password"
            inputPlaceholder="Senha"
            inputValue={password}
            inputOnchange={handleLoginValues}/>
           </S.Div>
        <S.Div className='actions'>
          <Button btnType='submit' btnName='Entrar'/>
          <button type='button' onClick={() => { console.log('hello') }}>trocar cor</button>
        </S.Div>
      </S.Form>
    </S.Div>
  )
}

export default SignInPage
