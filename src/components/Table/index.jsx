import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const Table = () => {
  const { userData } = useContext(AuthContext)
  /* return (
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
  ) */
  const th = React.createElement(
    'th',
    {
      colSpan: 2
    },
    ['Dados do Usuário']
  )

  const tr = React.createElement(
    'tr',
    {},
    [th]
  )

  const thead = React.createElement(
    'thead',
    {},
    [tr]
  )

  const td11 = React.createElement(
    'td',
    {},
    ['Nome ']
  )

  const td12 = React.createElement(
    'td',
    {},
    [userData.name]
  )

  const tr1 = React.createElement(
    'tr',
    {},
    [td11, td12]
  )

  const td21 = React.createElement(
    'td',
    {},
    ['Email ']
  )

  const td22 = React.createElement(
    'td',
    {},
    [userData.email]
  )

  const tr2 = React.createElement(
    'tr',
    {},
    [td21, td22]
  )

  const td31 = React.createElement(
    'td',
    {},
    ['Data de Nascimento']
  )

  const td32 = React.createElement(
    'td',
    {},
    [userData.birthday]
  )

  const tr3 = React.createElement(
    'tr',
    {},
    [td31, td32]
  )

  const tbody = React.createElement(
    'tbody',
    {},
    [tr1, tr2, tr3]
  )

  const table = React.createElement(
    'table',
    {},
    [thead, tbody]
  )

  return React.createElement(
    'div',
    {},
    [table]
  )
}

export default Table
