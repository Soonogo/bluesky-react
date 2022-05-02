import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';

export const REcharts =(props:any)=>{
  const {option,loading} = props
  const container = useRef<HTMLDivElement>(null)
  const myChart = useRef(null)
  useEffect(()=>{
    if (!container.current){return}
    const width = document.body.clientWidth
    container.current.style.width=`${width}px`
    container.current.style.height=`${width*1.2}px`
    // @ts-ignore
    myChart.current = echarts.init(container.current,'light');
  },[])
  useEffect(()=>{
    if (!myChart.current){return}
    console.log(myChart.current);
    // @ts-ignore
    myChart.current.setOption(option)
  },[option])
  useEffect(()=>{
    if (loading){
      // @ts-ignore
      myChart.current.showLoading()
    }else{
      // @ts-ignore
      myChart.current.hideLoading()
    }

  },[loading])
  return(
    <div ref={container} >hi</div>
  )
}