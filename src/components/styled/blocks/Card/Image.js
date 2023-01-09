import React from 'react'
import styled from 'styled-components'

const Image = ({src, alt}) => {
  return (
    <StyledImage src={src} alt={alt} />
  )
}

const StyledImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
`

export default Image
