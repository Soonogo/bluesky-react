import React from "react";
import {useTags} from "../useTags";

import {useParams} from "react-router-dom";
import Icon from "../components/Icon";
import Layout from "../components/Layout";
import {Button} from "../components/Button";

type Params={
  id:string
}
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <header>
        <Icon name="left"/>
        <span>编辑标签</span>
      </header>
      <div>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里写备注"
          />
          <Button>删除</Button>
        </label>
      </div>
    </Layout>
  );
};

export {Tag};