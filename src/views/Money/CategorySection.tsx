import styled from "styled-components";
import React, {useState} from "react";
import {type} from "os";

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    background: darkseagreen;
    display: flex;

    > li {
      text-align: center;
      width: 50%;
      padding: 12px 0;
      position: relative;

      &.selected {
        background: lightcoral;

      }

      &.selected::after {
        content: '';
        background: #333;
        display: block;
        height: 3px;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const CategorySection:React.FC = () => {
  const categoryMap = {'+':'收入','-':'支出','*':'0'}
  type Y = keyof typeof categoryMap
  const [category, setCategory] = useState("-");
  const [x] = useState<Y[]>(["+", "-","*"]);
  return (
    <Wrapper>
      <ul>
        {x.map((c) =>
          <li className={category === c ? "selected" : ''}
            onClick={() => {setCategory(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};