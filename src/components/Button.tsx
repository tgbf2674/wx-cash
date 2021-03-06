import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement>&{
  recordType?: 'success' | 'warning' | 'none',
  size?: 'small' | 'normal'
}

type TStyledButton = {
  recordType: 'success' | 'warning' | 'none',
  size: 'small' | 'normal'
}

const BUTTON_COLOR={
  success:{
    background: theme.$success,
    borderColor: theme.$success,
    color: 'white'
  },
  warning:{
    background: theme.$warning,
    borderColor: theme.$warning,
    color: 'white'
  },
  none:{
    background: '#f1f1f1',
    borderColor: '#f1f1f1',
    color: theme.$subText
  }
}

const BUTTON_SIZE={
  small: {
    padding: '2px 8px',
    fontsize: theme.$smallTextSize
  },
  normal: {
    padding: '4px 12px'
  }
}

const StyledButton = styled.button<TStyledButton>(props=>{
  return{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRight: '16px',
    marginRight: '8px',
    border: '1px solid',
    borderRadius: '4px',
    ...BUTTON_COLOR[props.recordType],
    ...BUTTON_SIZE[props.size]
  }
})

const Button: React.FC<TProps> = (props)=>{
  const {recordType,size,...attributes} = props
  return (
    <StyledButton {...attributes} recordType={recordType!} size={size!}>
      {props.children}
    </StyledButton>
  )
}

Button.defaultProps={
  recordType: 'none',
  size: 'normal'
}

export default Button
