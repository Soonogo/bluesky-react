import Layout from '../components/Layout';
import React from 'react';
import styled from "styled-components";

const TagsSection = styled.section`
  background-color: #fafafa;
  padding: 12px 16px;
  > ul{
    margin: 0 -6px;
      > li{
        background: lightcoral;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 8px;
      }
  }

  > button{
      background: none;
      border: none;
      padding: 0 4px;
      border-bottom: 1px solid #ccc;
      color: #999;
  }
`
const NotesSection = styled.section`
  background: aquamarine;
  padding: 0 16px;
  > label{
    display: flex;
    align-items: center;  
    > span{
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      border: none;
      background: none;
      height: 72px;
      width: 100%;  
    }
  }
`
const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    background: darkseagreen;
    display: flex;
    >li{
      text-align: center;
      width: 50%;
      padding: 12px 0;
      position: relative;
      &.selected::after{
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
`
const NumberPadSection = styled.section`
  
`


function Money() {
  return (
    <Layout>
      <TagsSection>
          <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label >
          <span>记账备注</span>
          <input type="text" placeholder="在这里写备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
