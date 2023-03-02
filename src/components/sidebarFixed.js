import React, { useState } from 'react'
import { AppstoreOutlined,HomeOutlined,UserOutlined,SearchOutlined } from '@ant-design/icons';
import { Col,Layout } from 'antd';
import {sidebarColor,greyColor, menuSelectedColor, isMobile  } from '../const';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {  Drawer } from 'antd';
const { Sider } = Layout;


const SidebarFixed = (props) => {
  // const [tapped_orders, setTappedOrders] = useState(false);
  // const [tapped_home, setTappedHome] = useState(true);
  // const [tapped_user, setTappedUser] = useState(false);
  // const [tapped_search, setTappedSearch] = useState(false);

  const tapped_home = props.menu == 0 ? true : false;
  const tapped_orders = props.menu == 1 ? true : false;
  const tapped_user = props.menu == 2 ? true : false;
  const tapped_search = props.menu == 3 ? true : false;

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

  const SearchContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_search?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_search?"white": greyColor};
  &:hover{
      color:white;
  }
  `;


  return (
    ( isMobile(props.width) ? <Drawer closable={false} width={120} style={{backgroundColor:sidebarColor}} bodyStyle={{ padding:'0px',display:'flex', alignItems:'center', flexDirection:'column' }}
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
        
        <Link to="/dashboard">
        <a>
        <HomeContainer onClick={()=>{
            // setTappedHome(true);
            // setTappedOrders(false);
            // setTappedUser(false);
            // setTappedSearch(false);
            props.changeMenu(0);
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
            // setTappedHome(false);
            // setTappedOrders(true);
            // setTappedUser(false);
            // setTappedSearch(false);
            props.changeMenu(1);
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
            // setTappedHome(false);
            // setTappedOrders(false);
            // setTappedSearch(false);
            // setTappedUser(true);
            props.changeMenu(2);
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
        <Link to='/search'>
          <a>
          <SearchContainer onClick={()=>{
            // setTappedHome(false);
            // setTappedOrders(false);
            // setTappedUser(false);
            // setTappedSearch(true);
            props.changeMenu(3);
            props.onClose();
        }} >
          <SearchOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Search</div>
        </SearchContainer>
          </a>
        </Link>
        </Col>
      </Drawer>:
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
        
        <Link to="/dashboard">
        <a>
        <HomeContainer onClick={()=>{
            // setTappedHome(true);
            // setTappedOrders(false);setTappedUser(false);setTappedSearch(false);
            props.changeMenu(0);
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
            // setTappedHome(false);
            // setTappedOrders(true);setTappedUser(false);setTappedSearch(false);
            props.changeMenu(1);
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
            // setTappedHome(false);
            // setTappedOrders(false);
            // setTappedUser(true);setTappedSearch(false);
            props.changeMenu(2);
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
        <Link to='/search'>
          <a>
          <SearchContainer onClick={()=>{
            // setTappedHome(false);
            // setTappedOrders(false);
            // setTappedUser(false);
            // setTappedSearch(true);
            props.changeMenu(3);
        }} >
          <SearchOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Search</div>
        </SearchContainer>
          </a>
        </Link>
        </Col>
      </Sider>)
  )
}

export default SidebarFixed