import styled from 'styled-components'

export const Div = styled.div`
  &.group {
    display: flex;
    flex-direction: column;
    
  }
`
export const Input = styled.input`
&.form-input {
    background: none;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
  }
  [type=password] {
    letter-spacing: 0.3em;
  }
`

export const Label = styled.label`
&.form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &@mixin shrinkLabel {
      top: -14px;
      font-size: 12px;
      color: $main-color;
    }
  }
`
