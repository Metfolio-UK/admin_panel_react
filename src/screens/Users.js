import {  Layout } from 'antd';
import React, {useEffect, useRef} from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import {UserGrowth} from '../components/userGrowth'
import UsersTable from '../components/UsersTable';
import UserBaseChart2 from '../components/userbasechart2';
import { UserTableData } from '../helpers/dummydata';
const { Content, Footer } = Layout;
const UserScreem = (props) => {
  const userSection = useRef(null);

  useEffect(() => {
    if(props.scrollTo=="user_table"){
      window.scrollTo({
        top: userSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [])
  

  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Users" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>

        <Row>
          
          <Col xs={24} sm={24} md={24} lg={14}  >
        
          <UserGrowth />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10}  style={{paddingLeft: props.width<992 ? null : '20px' }}>
        
          <UserBaseChart2 chartColor='primary'
                    chartHeight='150px' />
          </Col>
          
        </Row>
        <div style={{height: props.width>992 ? null :'30px'}}/>
          
        
        <div ref={userSection}>
          <UsersTable tableData={ UserTableData } className='mb-5 mb-xl-8'/>
        </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default UserScreem