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
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.2),inset 0 5px 5px -5px rgba(0,0,0,.2);
  }
  > .pad{
    > button{
      width: 25%;
      height: 72px;
      float: left;
      border: none;
      &.zero{
        width: 50%;
      }
      &.ok{
        height: 144px;
        float: right;
      }
    &:nth-child(1){
      background: blue;
    }
    &:nth-child(2){
      background: green;
    }
  }
  }

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
        <div className="output">
          100
        </div>
        <div className="pad clearfix" >
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
