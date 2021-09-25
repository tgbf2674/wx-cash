import * as React from 'react'
import styled from 'styled-components';
import Icon from '../components/Icon';
import Divider from '../components/Dividier';

const StyleSummary = styled.div`
  color: ${props => props.theme.$success};
`
const Header = styled.header`
  background: ${props => props.theme.$success};
  .title{
    text-align: center;
    font-size: ${props=> props.theme.$largeTextSize};
  }
`
const TypeButton = styled.button`
  padding: 6px 12px;
  color: ${props => props.theme.$white};
  background: #53BC82;
  border: none;
  outline: none;
  border-radius: 4px;
`


const Summary: React.FC = () => {
  return (
    <StyleSummary>
      <Header>
        <p className="title">记账本</p>
        <section>
          <TypeButton>
            <span>全部类型</span>
            <Divider/>
            <Icon name="yingyong"></Icon>
          </TypeButton>
        </section>
        <section>
          <button>2021年9月</button>
          <span>总支出￥xxx</span>
          <span>总收入￥yyy</span>
        </section>
      </Header>
    </StyleSummary>
  )
}

export default Summary
