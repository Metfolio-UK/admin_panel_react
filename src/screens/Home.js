
import {  Layout } from 'antd';
import React from 'react';
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import SidebarFixed from '../components/sidebarFixed';

const { Content, Footer } = Layout;



const Home = (props) => {

  return (
    <Layout hasSider>
      <SidebarFixed/>
      <Layout
        className="site-layout"
        style={{  marginLeft: isMobile(props.width)?0: 150 }}>
        <Content>
          <Navbar width={props.width}/>
        </Content>
        <Footer style={{ textAlign: 'center' }} >
          Metfolio ©2023. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;