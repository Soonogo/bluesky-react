import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: #f60; border-radius: 4px;
  color: white;
`;
type Props={
  asd:string
}
const Button:React.FC<Props> =(props)=>{
  return(

    <ButtonWrapper >{props.asd}</ButtonWrapper>

    )

}
export {Button}