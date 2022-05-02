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
    &.login{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 0 2rem;
    }
    
    &.field input{
        width: 100%;
        height: 30px;
        margin-bottom: 1rem;
    }

    &.actions button{
        text-align: center;
        margin-top: 1rem;
        height: 40px;
        width: 70px;
        margin: 0 10px;
    }
`
