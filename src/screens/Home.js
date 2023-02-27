import {  Layout } from 'antd';
import React,{useState} from 'react';
import {isMobile} from '../const';
import SidebarFixed from '../components/sidebarFixed';
import SidebarDrawer from '../components/sidebarDrawer';
import Orders from './orders';
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Users from './Users';
import Search from './search';
import {Login } from '../components/Login';
import Layoutdefiner from '../components/layoutdefiner';




const Home = (props) => {
  const [open, setOpen] = useState(false);



  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
   
    <Routes>
      <Route exact path='/' element={<Login width={props.width}/>} />
      <Route exact path='/dashboard' element={<Layoutdefiner width={props.width} open={open} onClose={onClose} children={
        <Dashboard width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/orders' element={<Layoutdefiner width={props.width} open={open} onClose={onClose} children={
        <Orders width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/users' element={<Layoutdefiner width={props.width} open={open} onClose={onClose} children={
        <Users width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/search' element={<Layoutdefiner width={props.width} open={open} onClose={onClose} children={
        <Search width={props.width} showDrawer={showDrawer}/>
      }/>} />
      {/* <Route exact path='/orders' element={<Orders width={props.width} showDrawer={showDrawer}/>} />
      <Route exact path='/users' element={<Users width={props.width} showDrawer={showDrawer}/>} />
      <Route exact path='/search' element={<Search width={props.width} showDrawer={showDrawer}/>} /> */}
    </Routes>

    
  )
}
export default Home;