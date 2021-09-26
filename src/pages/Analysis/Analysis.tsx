import * as React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Drawer from '../../components/Drawer';
import MonthPanel from '../../components/MonthPanel';
import dayjs, {Dayjs} from 'dayjs';
import useRecordList from '../../hooks/useRecordList';
import {MONTH} from '../../lib/date';
import Divider from '../../components/Dividier';
import {useState} from 'react';
import CategorySection from './CategorySection';
const StyledAnalysis = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Main = styled.section`
  margin-top: 8px;
  background: white;
  padding: 24px;
`
const Analysis: React.FC = () => {
  const [showMonth, toggleMonth] = useState(false)
  const [month, setMonth] = useState(dayjs())

  const {getMonthRecord} = useRecordList()

  // 选中的 month record
  const selectedRecordList = getMonthRecord(month.format(MONTH))

  return (
    <Layout>
      <StyledAnalysis>

        <Main>
          <CategorySection monthRecord={selectedRecordList}/>

          <Divider direction="horizontal" gap={24}/>


          <Divider direction="horizontal" gap={24}/>

        </Main>
      </StyledAnalysis>


      {/*选择月份*/}
      {
        showMonth &&
        <Drawer title="请选择月份" closeDrawer={() => toggleMonth(false)}>
          <MonthPanel value={month}
                      closeDrawer={() => toggleMonth(false)}
                      onSubmit={(newMonth: Dayjs) => setMonth(newMonth)}/>
        </Drawer>
      }
    </Layout>
  )
}

export default Analysis
