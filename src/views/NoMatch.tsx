import React, {useEffect, useRef} from "react";
import img from '../images/404.png';
function NoMatch() {
  const div = useRef(null)
  useEffect(()=>{
    if (!div.current) {return}
    const width = document.body.clientWidth
    console.log(width);
    // @ts-ignore
    div.current.style.width=`${width}px`
    // @ts-ignore
    // div.current.style.height=`${width*1.2}px`
    console.log(div.current);
  },[])
  return (
    <div >
      <img ref={div} src={img} alt="404"/>
    </div>
  );
}

export default NoMatch;
