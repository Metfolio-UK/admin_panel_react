import {  Layout } from 'antd';
import React,{useState} from 'react';
import {isMobile} from '../const';
import SidebarFixed from '../components/sidebarFixed';
import SidebarDrawer from '../components/sidebarDrawer';
import Orders from './orders';
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Users from './Users';




const Home = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout hasSider>
      <SidebarFixed/>
      {isMobile(props.width) && <SidebarDrawer open={open} onClose={onClose}/>}
      <Routes>
        <Route exact path='/' element={<Dashboard width={props.width} showDrawer={showDrawer}/>} />
        <Route exact path='/orders' element={<Users width={props.width} showDrawer={showDrawer}/>} />
      </Routes>
    </Layout>
  );
};
export default Home;