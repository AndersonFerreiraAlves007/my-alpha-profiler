import styled from 'styled-components'

export const Form = styled.form`
  background-color: #f1f1f1;
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Div = styled.div`
  &.sign-up-container {
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #d0d0e9;
  }

  &.actions button {
    text-align: center;
    margin-top: 2rem;
    height: 30px;
    width: 60px;
  }
`

export const Button = styled.button`
width: 40px
`
