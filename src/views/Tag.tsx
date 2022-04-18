import React from "react";
import {useTags} from "../useTags";

import {useParams} from "react-router-dom";
import Icon from "components/Icon";
import Layout from "components/Layout";
import {Button} from "components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Space} from "../components/Space";
import {Center} from "../components/Center";

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px;
  line-height: 20px;
  background: gainsboro;
`;
const InputWrapper = styled.div`
  background: gainsboro;
  margin-top: 16px;
`;
type Params = {
  id: string
}
const Tag: React.FC = (props) => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder={tag.name}
               onChange={e => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Space/>
      <Space/>
      <Space/>
      <Center>
        <Button onClick={() => {
          deleteTag(tag.id);
          window.history.back();
        }}>删除</Button>
      </Center>
    </div>
  );

  if (tag) {
    return (
      <Layout>
        <Topbar>
          <Icon name="left"/>
          <span>编辑标签</span>
          <Icon/>
        </Topbar>
        {tag ? tagContent(tag) : <div>111</div>}
      </Layout>
    );
  } else {
    return (
      <div>不存在</div>
    );
  }

};

export {Tag};