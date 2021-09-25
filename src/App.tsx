import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Summary from './pages/Summary';
import theme from './theme'

const StyledApp =styled.div`
  max-width: 480px;
  margin: 0 auto;
  background: #ededed;
  height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <StyledApp>
      <Summary />
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
