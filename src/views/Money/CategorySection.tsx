import styled from "styled-components";
import React, {useState} from "react";

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


type Props ={
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props> = (props) => {
  const categoryMap = {'+':'收入','-':'支出'}
  type Y = keyof typeof categoryMap
  const category = props.value
  const [x] = useState<Y[]>(["+", "-"]);
  return (
    <Wrapper>
      <ul>
        {x.map((c) =>
          <li key={c} className={category === c ? "selected" : ''}
            onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};