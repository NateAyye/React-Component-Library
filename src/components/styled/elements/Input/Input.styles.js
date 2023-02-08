import styled, {css} from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: clamp(100px, 150px, 200px);
  
  transition: all 500ms ease-in-out;

  &:focus label {
    transform: translate(0, -18px);
    color: blue;
  }

`

export const Input = styled.input`
  padding: 3px 5px 3px 5px;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #222;


  
`

export const Label = styled.label`
  padding: 3px 5px 3px 5px; 
  transition: all 500ms ease-in-out;
  
  ${(props) => props.labelPlaceholder && css`
    position: absolute;
    color: #323232;
  `}
  

`