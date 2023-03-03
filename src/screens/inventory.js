import {  Layout } from 'antd';
import React from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import { BuyTableData, InventoryTableData, UserTableData } from '../helpers/dummydata';
import CustomerHolding from '../components/CustomerHoldings';
import AdminHolding from '../components/AdminHoldings';
import InventoryTable from '../components/InventoryTable';
import Supp from '../components/supp';
const { Content, Footer } = Layout;
const Inventory = (props) => {
    return (
        <Layout
        className="site-layout"
        style={{  marginLeft: isMobile(props.width)?0: 150 }}>
        <Content>
          <Navbar heading="Inventory" width={props.width} showDrawer={props.showDrawer}/>
          <div style={{height:'20px'}}/>
          <div style={{ padding:'20px' }}>
    
            <Row>
              <Col xs={24} sm={24} md={24} lg={8}>
                <AdminHolding/>
              </Col>
              
              <Col xs={24} sm={24} md={24} lg={8} style={{paddingLeft: props.width<992 ? null : '20px' }} >
               
                <CustomerHolding/>
              </Col>

              <Col xs={24} sm={24} md={24} lg={8} style={{paddingLeft: props.width<992 ? null : '20px' }} >
               
                <Supp/>
              </Col>
              
            </Row>
            <div style={{height: props.width>992 ? null :'20px'}}/>
          
        
        
        <InventoryTable tabledata={ InventoryTableData } className='mb-5 mb-xl-8'/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} >
          Metfolio ©2023. All Rights Reserved.
        </Footer>
      </Layout>
      )
    }

export default Inventory