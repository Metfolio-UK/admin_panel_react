
import {  Layout } from 'antd';
import React,{useState} from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import SidebarFixed from '../components/sidebarFixed';
import SidebarDrawer from '../components/sidebarDrawer';
import SellOrders from '../components/sellOrders';
const { Content, Footer } = Layout;



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
      <Layout
        className="site-layout"
        style={{  marginLeft: isMobile(props.width)?0: 150 }}>
        <Content>
          <Navbar width={props.width} showDrawer={showDrawer}/>
          <div style={{height:'20px'}}/>
          <div style={{ padding:'12px' }}>
            <SellOrders className='mb-5 mb-xl-8'/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} >
          Metfolio ©2023. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;