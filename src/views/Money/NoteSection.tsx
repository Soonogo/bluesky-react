import styled from "styled-components";
import React, {useRef, useState} from "react";

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

const NoteSection = () => {
  const [note, setNote] = useState("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
      refInput.current&& setNote(refInput.current.value);
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