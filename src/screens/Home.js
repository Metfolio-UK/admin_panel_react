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
import CurrentUser from './currentUser';




const Home = (props) => {
  const [menu, setmenu] = useState(0);
  const [open, setOpen] = useState(false);

  const changeMenu = (curr_menu) => {
    setmenu(curr_menu);
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
   
    <Routes>
      <Route exact path='/' element={<Login width={props.width}/>} />
      <Route exact path='/dashboard' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Dashboard changeMenu={changeMenu} width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/orders' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Orders width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/users' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Users width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/search' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Search width={props.width} showDrawer={showDrawer}/>
      }/>} />

      <Route exact path='/currentUser' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <CurrentUser width={props.width} showDrawer={showDrawer}/>
      }/>} />
    </Routes>

    
  )
}
export default Home;