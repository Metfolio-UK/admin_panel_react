import {  Layout } from 'antd';
import React,{useState, useRef} from 'react';
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
import Inventory from './inventory';
import DeliveryScreen from './delivery';
import UserProfile from './userProfile';




const Home = (props) => {
  const [menu, setmenu] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState("");


  const changeMenu = (curr_menu) => {
    setmenu(curr_menu);
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const scrollToPosition = (position) => {
    console.log("scroll position to user_table");
    setScrollTo(position);
  }
 

  return (
   
    <Routes>
      <Route exact path='/' element={<Login width={props.width}/>} />
      <Route exact path='/dashboard' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Dashboard scrollToPosition={scrollToPosition} changeMenu={changeMenu} width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/orders' element={<Layoutdefiner scrollToPosition={scrollToPosition} menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Orders scrollTo={scrollTo} width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/users' element={<Layoutdefiner scrollToPosition={scrollToPosition} menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Users scrollTo={scrollTo}  width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/inventory' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Inventory width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/search' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <Search width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/delivery' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <DeliveryScreen width={props.width} showDrawer={showDrawer}/>
      }/>} />

      <Route exact path='/currentUser' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <CurrentUser width={props.width} showDrawer={showDrawer}/>
      }/>} />
      <Route exact path='/profile' element={<Layoutdefiner menu={menu} changeMenu={changeMenu} width={props.width} open={open} onClose={onClose} children={
        <UserProfile width={props.width} showDrawer={showDrawer}/>
      }/>} />
    </Routes>

    
  )
}
export default Home;