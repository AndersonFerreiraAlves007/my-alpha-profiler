import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
// import * as S from './style'

const ProfileDropdown = () => {
  const { handleLogout } = useContext(AuthContext)
  const logout = () => {
    handleLogout()
  }
  /* return (
    <S.Div className="profile-dropdown">
      <Link className="update-profile" to="/edit_profile">
        <p>Atualizar Perfil</p>
      </Link>
      <Link className="log-out" to="/">
        <p onClick={logout}>Sair</p>
      </Link>
    </S.Div>
  ) */
  const p1 = React.createElement(
    'p',
    {},
    ['Atualizar Perfil']
  )

  const link1 = React.createElement(
    Link,
    {
      className: 'update-profile',
      to: '/edit_profile'
    },
    [p1]
  )

  const p2 = React.createElement(
    'p',
    { onClick: logout },
    ['Sair']
  )

  const link2 = React.createElement(
    Link,
    {
      className: 'log-out',
      to: '/'
    },
    [p2]
  )

  return React.createElement(
    'div',
    {
      className: 'profile-dropdown'
    },
    [link1, link2]
  )
}

export default ProfileDropdown
