import styled from 'styled-components'
import Link from 'next/link'

export const SForm = styled.form`
  width: 100%;
  font-family: 'Segoe UI';
  background: whitesmoke;
  color: ${props => props.theme.dark.primary};
  border-radius: 1rem;
  padding: 1rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px #ddd;
`


export const FormTitle = styled.span`
  font-size: 24px;
  font-weight: bolder;

`
export const FormControl = styled.div`
  width: 70%;
  :first-of-type {
    margin: 1rem 0;
  }

  :last-of-type {
    margin-bottom: 1rem;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(1rem / 4);
`

export const Input = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.dark.primary};
  width: 100%;
  padding: .5rem;
  font-size: 14px;
  border-radius: .5rem;
`

export const Redirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: .1rem;
`

export const RedirectLabel = styled.span`
  color: ${props => props.theme.dark.primary};
`

export const RedirectLink = styled(Link)`
  color: #1ed760;
  text-decoration: underline;
`