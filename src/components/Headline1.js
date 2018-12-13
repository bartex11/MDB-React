import React from 'react'
import styled from 'styled-components'

// Apply styles to h1
const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const TitleComponent = props =>
  <StyledTitle className={props.className}>{props.children}</StyledTitle>

export default TitleComponent