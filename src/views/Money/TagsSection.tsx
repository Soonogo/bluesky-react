import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";

const Wrapper = styled.section`
  background-color: #fafafa;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  @keyframes shake{
    10%, 90% {
      transform: translate3d(-1px, -1px, 0);
    }
    20%, 80% {
      transform: translate3d(2px, -2px, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, -4px, 0);
    }
    40%, 60% {
      transform: translate3d(4px, -4px, 0);
    }
  }
  > ul {
    margin: 0 -6px;

    > li {
      background: #efefff;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 8px;
      
      &.selected {
        background: lightskyblue;
        animation: shake 800ms ease-in-out;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 0 4px;
    border-bottom: 1px solid #ccc;
    color: #999;
  }
`;

type Props = {
  value: number[],
  onChange: (select: number[]) => void
}
const TagSection: React.FC<Props> = (props) => {
  const {tags,addTag} = useTags()
  const selectTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectTagIds.indexOf(tagId);
    if (index > -1) {
      props.onChange(selectTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectTagIds, tagId]);
    }
  };
  return (
    <>
      <Wrapper>
        <ul>

          {tags.map((tag) =>
            <li key={tag.id} onClick={() => onToggleTag(tag.id)}
                className={selectTagIds.indexOf(tag.id) > -1 ? "selected" : ""}>
              {tag.name}
            </li>
          )}
        </ul>
        {/*<button onClick={addTag}>新增标签</button>*/}
      </Wrapper>
    </>
  );
};

export {TagSection};