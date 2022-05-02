import React, { useState/* , useContext */ } from 'react'

// import { AuthContext } from '../../context/auth.context.jsx'
import FormInput from '../../components/Form-input/index'
import Button from '../../components/Button/index'
import * as S from './styles.js'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  // const { setUserData } = useContext(AuthContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  /* const resetFormFields = () => {
    setFormFields(defaultFormFields)
  } */

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      /* const { user } = await createAuthUserWithEmailAndPasword(email, password)

      setCurrentUser(user)

      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields() */
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error ', error)
      }
    }
  }

  return (
    <S.Div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <S.Form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit" btnName="Sign Up" onClickHandler={handleSubmit}/>
      </S.Form>
    </S.Div>
  )
}
export default SignUpPage
