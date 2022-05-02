import styled from 'styled-components'

export const Input = styled.input`
   width: 100%;
   height: 25px;
`
export const InputDiv = styled.div`
   
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   
`
export const Button = styled.button`
   width: 100px;
   border: 2px solid black;
   border-radius: 5px;
   background-color: rgb(148,163,164);
   font-weight: bold;
   cursor: pointer;

   
   &:hover{
      background-color: white;
      border: 2px solid rgb(100,105,130);
      color: black;
   }
   &:active{
      background-color: rgb(90,120,130);
      border: 2px solid black;
      color: white;
   }
`
export const InputFile = styled.input`


`
export const ImgPerfil = styled.img`
   width: 80%
`
export const Div = styled.div`
   
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      width: 50%;
   
`
export const FieldFormDiv = styled.div`
      
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 50px;
      min-width: 600px;
      max-width: min-content;
      min-height: 400px;
      max-height: min-content;
      background-color: rgb(220,220,250);
      border: 2px solid black;
      border-radius: 20px;
   
   
`

export const Main = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 50px;
   width: 100vw;
   min-height: 100vh;
   max-height: min-content;
   
`
