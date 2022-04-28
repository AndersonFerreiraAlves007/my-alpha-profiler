import React from 'react'
import * as S from './styles.js'
import iconPerfil from './../../assets/images/icons-perfil.svg'

const ProfilePage = () => {
  return (
    <S.Main className="main">
      <S.FieldFormDiv className="field-edit-user">
        <S.Div>
          <S.ImgPerfil src={iconPerfil} alt="" />
          <p >Alterar imagem de perfil</p>
          <S.InputFile type="file" />
        </S.Div>
        <S.Div>
          <S.InputDiv className="edition-field">
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="text"
              className="input-field"
              placeholder="Digite seu username"
            />
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="password"
              className="input-field"
              placeholder="Digite sua senha"
            />
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="email"
              className="input-field"
              placeholder="Digite seu email"
            />
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="date"
              className="input-field"
              placeholder="Digite sua data de nascimento"
            />
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="text"
              className="input-field"
              placeholder="Digite seu nome"
            />
          </S.InputDiv>
          <S.InputDiv>
            <S.Button type="button">Atualizar</S.Button>
          </S.InputDiv>
        </S.Div>
      </S.FieldFormDiv>
    </S.Main>
  )
}
export default ProfilePage
