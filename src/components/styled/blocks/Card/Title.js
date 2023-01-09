import React from 'react'
import styled from 'styled-components'

const Title = ({children}) => {
  return (
      <H3>{children}</H3>
  )
}

const H3 = styled.h3`
  font-weight: bolder;
  font-family: 'Segoe UI', sans-serif;
  font-size: 15px;
`

export default Title
