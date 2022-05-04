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