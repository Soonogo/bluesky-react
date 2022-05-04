import Layout from '../components/Layout';
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {useRecords} from "../hooks/useRecords";
import {message} from "antd";
import {useHistory} from "react-router-dom";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormData={
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj})
  }
  const history = useHistory();

  const {addRecord}=useRecords()
  const submit=()=>{
    if (addRecord(selected)){
      setSelected(defaultFormData)
      const hide = message.loading('加载中..', 0);
      setTimeout(hide, 500);
      setTimeout(()=>{
        message.info('保存成功');
        setTimeout(()=>{
          history.push('/chart');
        },1000)
      },1000)

    }
  }

  return (
    <MyLayout scrollTop={9999}>
      <CategorySection value={selected.category}
                       onChange={category=>{onChange({category})}} />
        <TagSection value={selected.tagIds}
                  onChange={tagIds=>onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note=>{onChange({note})}} />

      <NumberPadSection value={selected.amount}
                        onChange={amount=>{onChange({amount})}}
                        onOK={()=>{submit()}}
        />
    </MyLayout>
  );
}

export default Money;
