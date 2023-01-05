import React from 'react'
import styled from 'styled-components'

const StyledHeader = ({children}) => {
  return (
    <CardHeader>
      {children}
    </CardHeader>
  )
}

const CardHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  padding: 0.25rem 1rem;
  justify-content: space-between;
  align-items: center;
`

export default StyledHeader
