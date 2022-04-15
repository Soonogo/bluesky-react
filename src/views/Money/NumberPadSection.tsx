import styled from "styled-components";
import React, {useState} from "react";

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

const NumberPadSection = () => {
  const [output, _setOutput] = useState("0");
  const setOutput = (output:string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = "0";
    }
    _setOutput(output);
  };
  const onButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case ("0"):
      case ("1"):
      case ("2"):
      case ("3"):
      case ("4"):
      case ("5"):
      case ("6"):
      case ("7"):
      case ("8"):
      case ("9"):
        if (output === "0") {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case ("."):
        if (output.indexOf(".") > -1) {return; }
        setOutput(output + ".");
        console.log(text);
        break;
      case "删除":
        if (output.length === 1) {return setOutput("0");}
        setOutput(output.slice(0, output.length - 1));
        console.log("shanchu");
        break;
      case "清空":
        setOutput("0");
        console.log("清空");
        break;
      case "OK":
        console.log("OK");
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onButtonWrapper}>
        <button><span>1</span></button>
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
    </Wrapper>
  );
};

export {NumberPadSection};