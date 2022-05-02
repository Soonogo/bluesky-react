import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
// import {Input} from "components/Input";
import { Input } from 'antd';


const Wrapper = styled.section`
  //background: aquamarine;
  padding: 0 ;
`;

type Props = {
  value:string,
  onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> = (props) => {
  // const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <label>
        <Input size="large" maxLength={20} showCount value={props.value} onChange={onChange} placeholder="填写备注" />
      </label>
    </Wrapper>
  );
};

export {NoteSection};