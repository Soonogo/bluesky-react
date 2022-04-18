import React from "react";
import {useTags} from "../useTags";

import {useParams} from "react-router-dom";
import Icon from "components/Icon";
import Layout from "components/Layout";
import {Button} from "components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 12px 0 ;
  padding: 0 12px;
`

type Params={
  id:string
}
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
       <Input label="标签名" type="text" placeholder={tag.name}/>{tag.name}
      </div>
      <Button asd="asd"/>

    </Layout>
  );
};

export {Tag};