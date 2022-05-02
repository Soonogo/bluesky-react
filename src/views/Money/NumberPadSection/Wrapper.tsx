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
      width: 24.5%;
      height: 72px;
      float: left;
      border: none;
      margin:  1px;


      &.zero {
        width: 49.3%;
      }

      &.ok {
        height: 144px;
        float: right;
        right:3px
      }

      &:nth-child(1) {
      }

      &:nth-child(2) {
      }
    }
  }

`;

export {Wrapper}