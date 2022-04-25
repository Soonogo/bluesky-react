import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";


const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const findTag = (id: number) => tags.filter(c => c.id === id)[0];
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: "衣"},
        {id: createId(), name: "食"},
        {id: createId(), name: "住"},
        {id: createId(), name: "行"},
      ];
    }
    setTags(localTags);

  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, tags);
  // const findTagIndex = (id: number) => {
  //   let result = -1;
  //   for (let i = 0; i < tags.length; i++) {
  //     if (tags[i].id === id) {
  //       result = i;
  //       break;
  //     }
  //   }
  //   return result;
  // };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    console.log(1);
  };
  const addTag = () => {
    const tagName = window.prompt("标签名为");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : "";
  };
  return {findTag, getName, addTag, setTags, tags, updateTag, deleteTag};
};

export {useTags};
