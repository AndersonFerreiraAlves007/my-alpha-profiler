import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

const ProfileDropdown = () => {
  return (
    <S.Div className="profile-dropdown">
      <Link className="update-profile" to="/edit_profile">
        <p>Atualizar Perfil</p>
      </Link>
      <Link className="log-out" to="/">
        <p>Sair</p>
      </Link>
    </S.Div>
  )
}

export default ProfileDropdown
