import styled from "styled-components";
import React, {useRef} from "react";

const Wrapper = styled.section`
  background: aquamarine;
  padding: 0 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      border: none;
      background: none;
      height: 72px;
      width: 100%;
    }
  }
`;

type Props = {
  value:string,
  onChange:(note:string)=>void
}
const NoteSection:React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  const note = props.value
  const onBlur = () => {
      refInput.current&& props.onChange(refInput.current.value);
  };
  console.log(note);
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里写备注"
               ref={refInput}
               defaultValue={note}
               onChange={onBlur}
        />
      </label>
    </Wrapper>
  );
};

export {NoteSection};