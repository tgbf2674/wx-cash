import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Summary from './pages/Summary';
import theme from './theme'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

type TStyledApp = {
  height: number
}
const StyledApp = styled.div<TStyledApp>`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: #EDEDED;
  height: ${props => props.height + 'px'}
`

const App: React.FC=()=>{
  const [height,setHetght] = useState(window.innerHeight)
  const onResize= ()=>{
    setHetght(window.innerHeight* 0.01)
  }
  useEffect(()=>{
    window.addEventListener('resize',onResize)
    return window.removeEventListener('resize',onResize)
  })
  return(
    <ThemeProvider theme={theme}>
      <Router>
        <StyledApp height={height}>
          <Switch>
            <Route exact path="/">
              <Summary/>
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  )
}

export default App;
