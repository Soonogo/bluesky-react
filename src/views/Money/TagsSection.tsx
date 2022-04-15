import styled from "styled-components";
import React, {useState} from "react";

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
      background: lightcoral;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 8px;
      &.selected{
        background: white;
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
const TagSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(["衣1", "食1", "住1", "行1"]);
  const [selectTag, setSelectTag] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt("标签名为");
    tagName && setTags([...tags, tagName]);
  };
  const onToggleTag = (tag: string) => {
    const index = selectTag.indexOf(tag);
    if (index > -1) {
      setSelectTag(selectTag.filter((t) => t !== tag));
    } else {
      setSelectTag([...selectTag, tag]);
    }
  };
  return (
    <>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <Wrapper>
        <ul>
          {tags.map((tag) =>
            <li key={tag} onClick={() => onToggleTag(tag)}
                className={selectTag.indexOf(tag) > -1 ? "selected" : ""}>
              {tag}
            </li>
          )}
        </ul>
        <button onClick={onAddTag}>新增标签</button>
      </Wrapper>
    </>
  );
};

export {TagSection};