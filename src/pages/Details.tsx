import * as React from 'react';
import {useHistory,useParams} from 'react-router-dom'
import styled from 'styled-components';
import useRecordList, {TRawRecord} from '../hooks/useRecordList';
import {useState} from 'react';
import Icon from '../components/Icon';
import Drawer from '../components/Drawer';
import Money from '../components/Money';
import RecordDetails from '../components/RecordDetails';

type TParams={
  id: string
}

const Header = styled.header`
  padding: 24px 12px;
`

const Main =styled.section`
  padding: 0 12px;
`

const Details: React.FC = ()=>{
  const {goBack,push} = useHistory()
  const {id} = useParams<TParams>()
  const {rawRecordList,deleteRecord,editRecord} = useRecordList()
  let [showMoney,toggleMoney] = useState(false)
  const rawRecord = rawRecordList.find(r=> r.id=== id)
  if(!rawRecord) return <div>页面出错</div>
  const onDelete = (id: string) => {
    deleteRecord(id)

    push('/')

    alert('删除成功')
  }

  const onEdit = (rawRecord: TRawRecord) => {
    editRecord(rawRecord)
    alert('修改成功')
  }

  return (
    <div>
      <Header>
        <Icon name="left" onClick={goBack} size={24}/>
      </Header>

      <Main>
        <RecordDetails onDelete={onDelete}
                       onEdit={() => toggleMoney(showMoney=true)}
                       rawRecord={rawRecord}/>
      </Main>

      {/*记账*/}
      {
        showMoney &&
        <Drawer closeDrawer={() => toggleMoney(showMoney=false)}>
          <Money closeDrawer={() => toggleMoney(showMoney=false)}
                 value={rawRecord}
                 onSubmit={onEdit}/>
        </Drawer>
      }
    </div>
  )
}

export default Details
