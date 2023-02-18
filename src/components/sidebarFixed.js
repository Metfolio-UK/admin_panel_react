import React from 'react'
import { AppstoreOutlined } from '@ant-design/icons';
import { Col,Layout } from 'antd';
import {sidebarColor,greyColor, menuSelectedColor  } from '../const';

import styled from 'styled-components';
const { Sider } = Layout;

const SidebarFixed = (props) => {
    var tapped_orders = true;


    const Container = styled.div`
    width:100px;
    height: 80px;
    border-radius:12px;
    align-items:center;
    background-color: ${tapped_orders?menuSelectedColor:null};
    display:flex;
    flex-direction:column;
    margin-bottom:16px;
    justify-content:center;
    color: ${tapped_orders?"white": greyColor};
    &:hover{
        color:white;
    }
    `;
  return (
    <Sider
      width={150}
      breakpoint='md'
      collapsedWidth='0'
        style={{
          backgroundColor:sidebarColor,
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
       
        <img alt='logo' src='images/logo.png' width={120} style={{
          margin:'32px 0px',
        }}/>
       
        <Col style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}>
        
        <Container>
          <AppstoreOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Orders</div>
        </Container>
        </Col>
      </Sider>
  )
}

export default SidebarFixed