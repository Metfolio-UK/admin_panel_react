import React from 'react';
import {  Drawer } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Col,Layout } from 'antd';
import {sidebarColor,greyColor, menuSelectedColor  } from '../const';

import styled from 'styled-components';
const { Sider } = Layout;
const SidebarDrawer = (props) => {
    var tapped_orders = true;

    const Container = styled.div`
    width: 80px;
    height: 75px;
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
    <Drawer closable={false} width={120} style={{backgroundColor:sidebarColor}} bodyStyle={{ padding:'0px',display:'flex', alignItems:'center', flexDirection:'column' }}
    placement="left" onClose={props.onClose} open={props.open}>
        <div style={{marginTop:'30px', marginBottom:'20px'}}>
        <img alt='logo' src='images/logo.png' width={85}/>

        </div>
       
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
      </Drawer>
  )
}

export default SidebarDrawer