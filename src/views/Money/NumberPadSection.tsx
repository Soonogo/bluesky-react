import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";
import { Button} from 'antd';

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
        <Button ><span>1</span></Button>
        <Button >2</Button>
        <Button >3</Button>
        <Button >删除</Button>
        <Button >4</Button>
        <Button >5</Button>
        <Button >6</Button>
        <Button >清空</Button>
        <Button >7</Button>
        <Button >8</Button>
        <Button >9</Button>
        <Button  className="ok">OK</Button>
        <Button  className="zero">0</Button>
        <Button >.</Button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};