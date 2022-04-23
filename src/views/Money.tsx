import Layout from '../components/Layout';
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {useRecords} from "../hooks/useRecords";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj})
  }
  const {addRecord,records}=useRecords()
  const submit=()=>{
    addRecord(selected)
  }
  return (
    <MyLayout >
      {JSON.stringify(selected)}
        <TagSection value={selected.tagIds}
                  onChange={tagIds=>onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note=>{onChange({note})}} />
      <CategorySection value={selected.category}
                       onChange={category=>{onChange({category})}} />
      <NumberPadSection value={selected.amount}
                        onChange={amount=>{onChange({amount})}}
                        onOK={()=>{submit()}}
        />
    </MyLayout>
  );
}

export default Money;
