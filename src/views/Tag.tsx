import React from "react";
import {useTags} from "../useTags";

import {useParams,useHistory} from "react-router-dom";
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
        <Button onClick={onClickBack}>删除</Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack=()=>{
    history.goBack()
  }
    return (
      <Layout>
        <Topbar>
          <Icon name="left" onClick={onClickBack} />
          <span>编辑标签</span>
          <Icon/>
        </Topbar>
        {tag ? tagContent(tag) : <div>Tag不见了</div>}
      </Layout>
    );

};

export {Tag};