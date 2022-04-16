import {useState} from "react";

const useTags=()=>{
  const [tags, setTags] = useState<string[]>(["衣1", "食1", "住1", "行1"]);
  return{tags,setTags}
}

export {useTags}
