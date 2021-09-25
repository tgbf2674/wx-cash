import React from 'react';
import styled from 'styled-components';
import Summary from './pages/Summary';

const StyledApp =styled.div`
  max-width: 540px;
  margin: 0 auto;
  background: #ededed;
  height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <Summary></Summary>
    </StyledApp>
  );
}

export default App;
