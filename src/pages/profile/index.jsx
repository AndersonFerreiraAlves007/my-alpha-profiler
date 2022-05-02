import React, { useState, useRef, useEffect, useContext } from 'react'
import * as S from './styles.js'
import { ApiContext } from '../../context/api.context'
// import useAuth from '../../context/hooks/useAuth.js'
import { useNavigate } from 'react-router-dom'
import iconPerfil from './../../assets/images/icons-perfil.svg'
function getCurrentDate (data = new Date()) {
  const day = data.getDate()
  const month = data.getMonth()
  const year = data.getFullYear()
  return `${year}-${(month + 1) < 10 ? `0${month + 1}` : (month + 1)}-${day < 10 ? `0${day}` : day}`
}
const ProfilePage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  // const [oldPassword, setOldPassword] = useState('')
  const [birthDate, setBirthDate] = useState(getCurrentDate())
  const refFileUp = useRef(null)
  const [fileUp, setFileUp] = useState('')
  const { getUser, updateUser } = useContext(ApiContext)
  // const { userData } = useAuth()
  const userID = localStorage.getItem('userid')
  const navigate = useNavigate()

  function encodeImageFileURL () {
    const fileSelect = refFileUp.current.files

    if (fileSelect.length > 0) {
      const fileSelector = fileSelect[0]
      const fileReader = new FileReader()
      fileReader.onload = function (FileLoadEvent) {
        const imgData = FileLoadEvent.target.result
        setFileUp(imgData)
      }
      fileReader.readAsDataURL(fileSelector)
    }
  }

  async function getDates () {
    const { name, email, image, birth_date: birthDate } = await getUser(userID)
    setNewPassword('')
    setName(name)
    setBirthDate(getCurrentDate(new Date(birthDate)))
    setFileUp(image)
    setEmail(email)
  }

  async function updateDates () {
    await updateUser(userID, newPassword !== '' ? { name, email, image: fileUp, birth_date: birthDate, password: newPassword } : { name, email, image: fileUp, birth_date: birthDate })
    navigate('/home')
  }

  useEffect(() => {
    getDates()
  }, [])
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  // const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return (
    <S.Main className="main">
       <button type='button' style={{ position: 'fixed', left: '20px', top: '20px', width: '100px' }} onClick={() => { navigate('/home') }} >Voltar</button>
      <S.FieldFormDiv className="field-edit-user">
        <S.Div>
          <S.ImgPerfil src={ fileUp !== '' ? fileUp : iconPerfil} alt="" />
          <p >Alterar imagem de perfil</p>
          <S.InputFile type="file" ref={refFileUp} onChange={() => {
            encodeImageFileURL()
          }} />
        </S.Div>
        <S.Div>
          <S.InputDiv className="edition-field">
            <label htmlFor="">Digite seu nome</label>
            <S.Input
              type="text"
              className="input-field"
              placeholder="Digite seu nome completo"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            {!(regexName.test(name)) && <div >
                  <spam style={{ color: 'red' }}> Por favor digite um nome válido, o nome deve ter no máximo 80 caracteres </spam>
            </div>}
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite seu e-mail</label>
            <S.Input
              type="email"
              className="input-field"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            {/* {!(regexEmail.test(email)) && <div >
                  <spam style={{ color: 'red' }}> Por favor digite um e-mail válido </spam>
            </div>} */}
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="">Digite sua nova senha</label>
            <S.Input
              type="password"
              className="input-field"
              placeholder="Digite sua senha"
              onChange={(event) => setNewPassword(event.target.value)}
              value={newPassword}
            />
            {!(newPassword !== '' && regexPassword.test(newPassword)) && <div >
                  <spam style={{ color: 'red' }}>A senha deve possuir no mínimo 8 caracteres e pelo menos 1 número </spam>
            </div>}
          </S.InputDiv>
          {/* <S.InputDiv>
            <label htmlFor="">Confirme sua senha atual</label>
            <S.Input
              type="password"
              className="input-field"
              placeholder="Digite sua senha"
              onChange={(event) => setOldPassword(event.target.value)}
              value={oldPassword}
            />
          </S.InputDiv> */}
          <S.InputDiv>
            <label htmlFor="">Digite sua data de nascimento</label>
            <S.Input
              type="date"
              className="input-field"
              placeholder="Digite sua data de nascimento"
              onChange={(event) => setBirthDate(event.target.value)}
              value={birthDate}
            />
            {birthDate === '' && <div >
                  <spam style={{ color: 'red' }}>data inválida</spam>
            </div>}
          </S.InputDiv>

          <S.InputDiv>
            <S.Button type="button" onClick={() => { updateDates() }}>Atualizar</S.Button>
          </S.InputDiv>
        </S.Div>
      </S.FieldFormDiv>
    </S.Main>
  )
}
export default ProfilePage
