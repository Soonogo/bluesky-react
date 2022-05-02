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
const Cbutton = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #001529;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #001529;
  }
`;


export const Chart = () => {
  const {records}= useRecords()
  const b = {'-':'支出','+':'收入'}
  const x = records.map(i=>({value:i.amount,name:b[i.category]}))
  type Props={
    series:any
    tooltip:any
    legend:any

  }
  const [xData, setXData] = useState([5, 20, 36])
  const [loading,setLoading] =useState(false)
  const [option,setOption] =useState<Props>({
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
    setOption({
      //@ts-ignore
      legend: {
        top: '5%',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [{
        data: x
      }]
    })
  },[records])

  return (
        <Layout>
          <Wrapper>
            <h1>Chart</h1>
          <REcharts option={option} loading={loading} />
          <Cbutton onClick={onClick}>刷新</Cbutton>
          </Wrapper>  
        </Layout>
    );
};