import React, { useContext } from 'react'
import ProfilePicture from '../../assets/profile.png'
import ProfileDropdown from '../ProfileDropdown/index.jsx'
import { DropdownContext } from '../../context/dropdown.context.jsx'
// import * as S from './styles.js'

const Header = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(DropdownContext)
  const toggleIsDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen)
  /* return (
    <S.Div className="header">
      <S.H2>Bem-vindo, Usuário</S.H2>
      <S.Img
        src={ProfilePicture}
        alt="user profile picture"
        onClick={toggleIsDropdownOpen}
      />
      {isDropdownOpen && <ProfileDropdown />}
    </S.Div>
  ) */

  const h2 = React.createElement(
    'h2',
    { style: { color: 'white' } },
    ['Bem-vindo, Usuário']
  )

  const img = React.createElement(
    'img',
    {
      src: ProfilePicture,
      alt: 'user profile picture',
      onClick: toggleIsDropdownOpen,
      style: { width: '50px' }
    },
    []
  )

  if (isDropdownOpen) {
    const profileDropdown = React.createElement(
      ProfileDropdown,
      {},
      []
    )
    return React.createElement(
      'div',
      { className: 'header' },
      [h2, img, profileDropdown]
    )
  } else {
    return React.createElement(
      'div',
      { className: 'header' },
      [h2, img]
    )
  }
}

export default Header
