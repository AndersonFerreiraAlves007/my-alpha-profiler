import React from 'react'
import * as S from './styles'
const FormInput = ({ label, ...otherProps }) => {
  return (
        <S.Div className='group'>
            <S.Input
                className='form-input'
                {...otherProps}
            />
            {label && (
                <S.Label
                    >{label}
                </S.Label>
            )}

        </S.Div>

  )
}

export default FormInput
