import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AuthContext } from './context/auth.context'

import HomePage from './routes/home'
import SignInPage from './routes/signin/index'
import SignUpPage from './routes/signup'
import ProfilePage from './routes/profile'

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { loading, authenticated } = useContext(AuthContext)
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (isPrivate && !authenticated) {
    return <Redirect to='/' />
  }
  return <Route {...rest} />
}

const Routes = () => {
    return (
        <Switch>
            <CustomRoute exact path='/' component={SignInPage} />
            <CustomRoute exact path='sign_up' component={SignUpPage} />
            <CustomRoute isPrivate exact path='home' component={HomePage} />
            <CustomRoute isPrivate exact path='edit_profile' component={ProfilePage}
        </Switch>
    )
}

export default Routes
