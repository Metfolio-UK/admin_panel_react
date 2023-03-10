import {  Layout } from 'antd';
import React from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import AdminHolding from '../components/AdminHoldings';
import CustomerHolding from '../components/CustomerHoldings';
import UserBaseChart from '../components/userBaseChart';
import BuyOrderChart from '../components/buyorderschart';
import SellOrderChart from '../components/sellorderchart';
import RecurringOrderChart from '../components/recurringorderchart';
import Order from '../components/OrdersCharts';
import PaymentRisks from '../components/PaymentRisks';
import AverageOrder from '../components/AverageOrder';
const { Content, Footer } = Layout;
const Dashboard = (props) => {
  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Dashboard" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>

        <Row>
          <Col md={24} lg={24} xl={17} style={{
            display:'flex',
            flexGrow:1,
            flexDirection:'column'
          }}>
            <Row  style={{
                    display:'flex',
                    flexGrow:1, flexDirection:'row',
                }}>
                <Col style={{ paddingRight:props.width<992?null :'20px'  }} xs={24} sm={24} md={24} lg={12}>
                <Order/>
                </Col>
                <Col style={{  paddingRight:props.width<1200?null :'20px'  }}  xs={24} sm={24} md={24} lg={12}>
                <PaymentRisks/>
                </Col>
                
            </Row>
            <Row  style={{
                    display:'flex',
                    flexGrow:1, flexDirection:'row',
                }}>
                <Col style={{ paddingRight:props.width<992?null :'20px'  }} xs={24} sm={24} md={24} lg={12}>
                <UserBaseChart scrollToPosition={props.scrollToPosition} changeMenu={props.changeMenu}
                    chartColor='primary'
                    chartHeight='150px'/>
                </Col>
                <Col style={{ paddingTop: props.width<992?'20px':null, paddingRight:props.width<1200?null :'20px'  }}  xs={24} sm={24} md={24} lg={12}>
                <BuyOrderChart scrollToPosition={props.scrollToPosition} changeMenu={props.changeMenu}
                    chartColor='primary'
                    chartHeight='150px'/>
                </Col>
                
            </Row>

            <div style={{height:'20px'}}/>
            <Row  style={{
                    display:'flex',
                    flexGrow:1, flexDirection:'row',
                }}>
                <Col style={{ paddingRight:props.width<992?null :'20px'  }} xs={24} sm={24} md={24} lg={12}>
                <SellOrderChart scrollToPosition={props.scrollToPosition} changeMenu={props.changeMenu}
                    chartColor='primary'
                    chartHeight='150px'/>
                </Col>
                <Col style={{ paddingTop: props.width<992?'20px':null, paddingRight:props.width<1200?null :'20px'  }}  xs={24} sm={24} md={24} lg={12}>
                <RecurringOrderChart scrollToPosition={props.scrollToPosition} changeMenu={props.changeMenu}
                    chartColor='primary'
                    chartHeight='150px'/>
                </Col>
                
            </Row>
            
          </Col>

          <Col style={{paddingTop: props.width<1200?'20px':null,}} xs={24} sm={24} md={24} lg={24} xl={7}>
            <AdminHolding/>
            <CustomerHolding/>
            <AverageOrder/>
          </Col>
          
          </Row>
       
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ??2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default Dashboard