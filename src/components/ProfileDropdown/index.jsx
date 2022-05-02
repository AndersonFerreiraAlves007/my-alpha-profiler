import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
import * as S from './style'

const ProfileDropdown = () => {
  const { handleLogout } = useContext(AuthContext)
  const logout = () => {
    handleLogout()
  }
  return (
    <S.Div className="profile-dropdown">
      <Link className="update-profile" to="/edit_profile">
        <p>Atualizar Perfil</p>
      </Link>
      <Link className="log-out" to="/">
        <p onClick={logout}>Sair</p>
      </Link>
    </S.Div>
  )
}

export default ProfileDropdown
