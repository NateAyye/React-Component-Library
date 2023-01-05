import React from 'react'
import styled from 'styled-components'

const Text = ({children}) => {
  return (
    <CardText>
    <p>{children}</p>
    </CardText>
  )
}

const CardText = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid #aaaaaa00;
  border-radius: 0.5rem;
  padding: 0.25rem;

  p {
    text-overflow: ellipsis;
  }

  transition: all 0.5s ease-in-out;

  &:hover {
  border: 1px solid #aaaaaa66;

  }
`

export default Text
