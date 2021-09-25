import * as React from 'react'
import styled from 'styled-components';
const StyleSummary = styled.div`
  color: ${props => props.theme.$success};
`
const Summary: React.FC = () => {
  return (
    <StyleSummary>记账页</StyleSummary>
  )
}

export default Summary
