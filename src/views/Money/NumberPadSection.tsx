import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";
// import { Button} from 'antd';
import {CButton} from "../../components/Button";

type Props = {
  value: number,
  onChange: (x: number) => void
  onOK?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  // const output = props.value.toString();
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput:string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === "OK") {
      props.onOK && props.onOK();
    }
    if ("0123456789.".split("").concat("删 除", "清 空").indexOf(text) > -1) {
      setOutput(generateOutput(text, output));

    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onButtonWrapper}>
        <CButton ><span>1</span></CButton>
        <CButton >2</CButton>
        <CButton >3</CButton>
        <CButton >删除</CButton>
        <CButton >4</CButton>
        <CButton >5</CButton>
        <CButton >6</CButton>
        <CButton >清空</CButton>
        <CButton >7</CButton>
        <CButton >8</CButton>
        <CButton >9</CButton>
        <CButton  className="ok">OK</CButton>
        <CButton  className="zero">0</CButton>
        <CButton >.</CButton>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};