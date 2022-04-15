import Layout from '../components/Layout';
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <MyLayout >
      {selected.tags.join(',')}
      {selected.note}
      {selected.category}
      {selected.amount}
      <TagSection value={selected.tags}
                  onChange={(tags)=>setSelected({...selected , tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note)=>{setSelected({...selected,note})}} />
      <CategorySection value={selected.category}
                       onChange={(category)=>{
                         setSelected({...selected,category})
                       }} />
      <NumberPadSection value={selected.amount}
                        onChange={(amount)=>{setSelected({...selected,amount})}}
                        onOK={()=>{}}
        />
    </MyLayout>
  );
}

export default Money;
