import {  Layout } from 'antd';
import React,{useState} from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import SidebarFixed from '../components/sidebarFixed';
import SidebarDrawer from '../components/sidebarDrawer';
import SellOrders from '../components/sellOrders';
import BuyOrders from '../components/BuyOrders';
import RecurringOrders from '../components/RecurringOrders';
import { ChartsWidget1 } from '../components/Chart';
import { InvReport } from '../components/InventoryReport';
import AdminHolding from '../components/AdminHoldings';
import CustomerHolding from '../components/CustomerHoldings';
import AverageOrder from '../components/AverageOrder';

const { Content, Footer } = Layout;



const Orders = (props) => {
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
          <div style={{ padding:'20px' }}>

            <Row>
            <Col xs={24} sm={24} md={24} lg={8}>
                <AdminHolding/>
                <CustomerHolding/>
              </Col>
              
              <Col xs={24} sm={24} md={24} lg={16} style={{paddingLeft: props.width<992 ? null : '20px' }} >
              <InvReport/>
              
              <ChartsWidget1 />
              </Col>
              
              </Row>
              <div style={{height: props.width>992 ? null :'20px'}}/>
              
            
            
            <BuyOrders className='mb-5 mb-xl-8'/>
            <RecurringOrders className='mb-5 mb-xl-8'/>
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
export default Orders;