import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

    > li {
      text-align: center;
      width: 50%;
      padding: 12px 0;
      position: relative;
      border-radius: 20px;
      top: 20px;
      margin: 0 20px;
      background: gainsboro;

      &.selected {
        background: lightblue;
        transition: opacity 8s;
        background: linear-gradient(to right, lightskyblue, lightskyblue);
        position: relative;
        z-index: 0;
      }
      &.selected::before{
        content: '';
        position: absolute;
        left: 0; top: 0; right: 0; bottom: 0;
        background: linear-gradient(to right, #c1e3f7, #f2fcfe, #c1e3f7);
        opacity: 0;
        border-radius: 20px;
        transition: opacity 1s;
        z-index: -1;
      }
      &.selected:hover::before {
        opacity: 1;
      }

      //&.selected::after {
      //  content: '';
      //  background: #333;
      //  display: block;
      //  height: 3px;
      //  position: absolute;
      //  width: 100%;
      //  bottom: 0;
      //  left: 0;
      //}
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