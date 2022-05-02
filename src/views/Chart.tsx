import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {REcharts} from "./REcharts";
import {useRecords} from "../hooks/useRecords";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


export const Chart = () => {
  const {records}= useRecords()

  // const xData =[
  //   { value: 1048, name: 'Search Engine' },
  //   { value: 735, name: 'Direct' },
  // ]
  //@ts-ignore
  //@ts-nocheck
  const b = {'-':'支出','+':'收入'}
  const x = records.map(i=>({value:i.amount,name:b[i.category]}))
  console.log(x);
  const [xData, setXData] = useState([5, 20, 36])
  const [loading,setLoading] =useState(false)
  const [option,setOption] =useState({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [5, 20, 36]
        }
      ]
    })
  const onClick=()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      // @ts-ignore
      setOption({
        tooltip: {
          trigger: 'item'
        },
        series: [{
          data: x
        }]
      })
    },1000)

  }
  useEffect(()=>{
    setInterval(()=>{    },2000)

    let yData = parseInt( String(Math.random() * 10))
      // @ts-ignore
      setXData([...xData].push(yData))

      //@ts-ignore
      setOption({...option,series:[{...option.series,data:xData}]})
  },[])
  return (
        <Layout>
          <Wrapper>
            <h1>Chart</h1>
          <REcharts option={option} loading={loading} />
          <button onClick={onClick}>刷新</button>
          </Wrapper>  
        </Layout>
    );
};