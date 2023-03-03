import React,{useState} from 'react';
import {  Drawer } from 'antd';
import { AppstoreOutlined,HomeOutlined,UserOutlined,GoldOutlined } from '@ant-design/icons';
import { Col,Layout } from 'antd';
import {sidebarColor,greyColor, menuSelectedColor  } from '../const';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const { Sider } = Layout;
const SidebarDrawer = (props) => {
  const [tapped_orders, setTappedOrders] = useState(false);
  const [tapped_inv, setTappedInv] = useState(false);
  
  const [tapped_home, setTappedHome] = useState(true);
  const [tapped_user, setTappedUser] = useState(false);

  const HomeContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_home?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_home?"white": greyColor};
  &:hover{
      color:white;
  }
  `;
  const OrderContainer = styled.div`
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

  const UserContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_user?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_user?"white": greyColor};
  &:hover{
      color:white;
  }
  `;
  const InvContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_inv?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_inv?"white": greyColor};
  &:hover{
      color:white;
  }
  `;


  return (
    <Drawer closable={false} width={120} style={{backgroundColor:sidebarColor}} bodyStyle={{ padding:'0px',display:'flex', alignItems:'center', flexDirection:'column' }}
    placement="left" onClose={()=>props.onClose()} open={props.open}>
        <div style={{marginTop:'30px', marginBottom:'20px'}}>
        <img alt='logo' src='images/logo.png' width={85}/>

        </div>
       
        <Col style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}>
        
        <Link to="/">
        <a>
        <HomeContainer onClick={()=>{
            setTappedHome(true);
            setTappedOrders(false);
            setTappedUser(false);
            setTappedInv(false);
            props.onClose();
        }} >
          <HomeOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Home</div>
        </HomeContainer>
        </a></Link>
        <Link to='/orders'>
          <a>
          <OrderContainer onClick={()=>{
            setTappedHome(false);
            setTappedOrders(true);
            setTappedUser(false);
            setTappedInv(false);
            props.onClose();
        }} >
          <AppstoreOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Orders</div>
        </OrderContainer>
          </a>
        </Link>
        <Link to='/users'>
          <a>
          <UserContainer onClick={()=>{
            setTappedHome(false);
            setTappedOrders(false);
            setTappedUser(true);
            setTappedInv(false);
            props.onClose();
        }} >
          <UserOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Users</div>
        </UserContainer>
          </a>
        </Link>
        <Link to='/inventory'>
          <a>
          <InvContainer onClick={()=>{
            setTappedHome(false);
            setTappedOrders(false);
            setTappedInv(true);
            setTappedUser(false);
            props.onClose();
        }} >
          <GoldOutlined style={{
            fontSize:'28px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Inventory</div>
        </InvContainer>
          </a>
        </Link>
        </Col>
    </Drawer>
  )
}

export default SidebarDrawer