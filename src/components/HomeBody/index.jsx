import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import Table from '../Table'
// import * as S from './styles'

const HomeBody = () => {
  const { userData, retrieveData } = useContext(AuthContext)

  const getData = async () => {
    retrieveData(userData.id)
  }

  /* return (
    <S.Div>
      <h1>Dados do Usuário</h1>
      <button type="button" onClick={getData}>Ver Dados do Usuário</button>
      <Table />
    </S.Div>
  ) */

  const table = React.createElement(
    Table,
    {},
    []
  )

  const h1 = React.createElement(
    'h1',
    {},
    ['Dados do Usuário']
  )

  const btn = React.createElement(
    'button',
    {
      type: 'button',
      onClick: getData
    },
    ['Ver Dados do Usuário']
  )

  return React.createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100vh',
        background: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 40px'
      }
    },
    [h1, btn, table]
  )
}

export default HomeBody
