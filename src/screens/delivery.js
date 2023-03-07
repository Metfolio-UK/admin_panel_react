import {  Layout } from 'antd';
import React, {useEffect, useRef} from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import DeliveryToDoTable from '../components/deliveryToDoTable';
import DeliveryDoneTable from '../components/deliveryDoneTable';
import { DeliveryDoneTableData, DeliveryToDoTableData } from '../helpers/dummydata';
const { Content, Footer } = Layout;
const DeliveryScreen = (props) => {
  const userSection = useRef(null);

//   useEffect(() => {
//     if(props.scrollTo=="user_table"){
//       window.scrollTo({
//         top: userSection.current.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   }, [])
  

  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Delivery" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>

        <DeliveryToDoTable tableData={ DeliveryToDoTableData  } className='mb-5 mb-xl-8'/>
        <div style={{height:'12px'}}/>
        <DeliveryDoneTable tableData={ DeliveryDoneTableData  } className='mb-5 mb-xl-8'/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default DeliveryScreen