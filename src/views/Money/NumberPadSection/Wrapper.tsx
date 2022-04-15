import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, .2), inset 0 5px 5px -5px rgba(0, 0, 0, .2);
  }

  > .pad {
    > button {
      width: 25%;
      height: 72px;
      float: left;
      border: none;

      &.zero {
        width: 50%;
      }

      &.ok {
        height: 144px;
        float: right;
      }

      &:nth-child(1) {
        background: blue;
      }

      &:nth-child(2) {
        background: green;
      }
    }
  }

`;

export {Wrapper}