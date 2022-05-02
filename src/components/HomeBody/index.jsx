import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import Table from '../Table'
import * as S from './styles'

const HomeBody = () => {
  const { userData, retrieveData } = useContext(AuthContext)

  const getData = async () => {
    retrieveData(userData.id)
  }

  return (
    <S.Div>
      <h1>Dados do Usuário</h1>
      <button type="button" onClick={getData}>Ver Dados do Usuário</button>
      <Table />
    </S.Div>
  )
}

export default HomeBody
