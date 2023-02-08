import React from 'react';
import * as S from './Input.styles';

const Input = ({label, placeholder, labelPlaceholder}) => {
  return (
    <S.InputContainer>
      <S.Label labelPlaceholder={labelPlaceholder} >{label}</S.Label>
      <S.Input type={"text"} placeholder={labelPlaceholder ? null : placeholder} />
    </S.InputContainer>
  );
};


Input.defaultProps = {
  label: 'Label',
  placeholder: 'Name',
}
export default Input;
