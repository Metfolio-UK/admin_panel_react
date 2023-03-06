import {  Layout } from 'antd';
import React, { useEffect, useRef} from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import SellOrders from '../components/sellOrders';
import BuyOrders from '../components/BuyOrders';
import RecurringOrders from '../components/RecurringOrders';
import { ChartsWidget1 } from '../components/Chart';
import { InvReport } from '../components/InventoryReport';
import AdminHolding from '../components/AdminHoldings';
import CustomerHolding from '../components/CustomerHoldings';
import { BuyTableData, DeliveryToDoTableData, RecurringTableData, SellOrdersData, UserTableData } from '../helpers/dummydata';
import DeliveryToDoTable from '../components/deliveryToDoTable';
const { Content, Footer } = Layout;
const Orders = (props) => {
  const buySection = useRef(null);
  const sellSection = useRef(null);
  const recurringSection = useRef(null);



  useEffect(() => {
    if(props.scrollTo=="buy_table"){
      window.scrollTo({
        top: buySection.current.offsetTop,
        behavior: 'smooth',
      });
    }
    if(props.scrollTo=="sell_table"){
      window.scrollTo({
        top: sellSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
    if(props.scrollTo=="recurring_table"){
      window.scrollTo({
        top: recurringSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [])
  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Orders" width={props.width} showDrawer={props.showDrawer}/>
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
          
        
        
        <div ref={buySection}>
          <BuyOrders  tabledata={ BuyTableData } className='mb-5 mb-xl-8'/>
        </div>
        <div ref={recurringSection}>
          <RecurringOrders tabledata={ RecurringTableData } className='mb-5 mb-xl-8'/>
        </div>
        <div ref={sellSection}>
          <SellOrders  tableData={ SellOrdersData  } className='mb-5 mb-xl-8'/>
        </div>
        <DeliveryToDoTable tableData={ DeliveryToDoTableData  } className='mb-5 mb-xl-8'/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default Orders