import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const Table = () => {
  const { userData } = useContext(AuthContext)
  return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Dados do Usuário
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome </td>
                        <td>{userData.name}</td>
                    </tr>
                    <tr>
                        <td>Email </td>
                        <td>{userData.email}</td>
                    </tr>
                    <tr>
                        <td>Data de Nascimento</td>
                        <td>{userData.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default Table
