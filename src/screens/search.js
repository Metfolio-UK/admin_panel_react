import {  Layout } from 'antd';
import React, { useState } from 'react';
import { Row,Col } from 'antd'
import {isMobile} from '../const';
import Navbar from '../components/navbar';
import SellOrders from '../components/sellOrders';
import BuyOrders from '../components/BuyOrders';
import RecurringOrders from '../components/RecurringOrders';
import { SearchOutlined,MenuOutlined } from '@ant-design/icons';
import { dashColor, greyColor, sidebarColor,yellowColor } from '../const';
import UsersTable from '../components/UsersTable';
import { Input } from 'antd';
import { BuyTableData, RecurringTableData, SellOrdersData, UserTableData } from '../helpers/dummydata';
const { Content, Footer } = Layout;

const Search = (props) => {

    const [buyData, setBuyData] = useState(BuyTableData);
    const [recurringData, setRecurringData] = useState(RecurringTableData);
    const [sellData, setSellData] = useState(SellOrdersData);
    const [userData, setUserData] = useState(UserTableData);
    const [searchParameter, setSearchParameter] = useState("");

    const searchDataInTables = () => {
        console.log(searchParameter);
        if(searchParameter.trim() == "" || searchParameter.trim() == null){
            setBuyData(BuyTableData);
            setRecurringData(RecurringTableData);
            setSellData(SellOrdersData);
            setUserData(UserTableData);
            return;
        }
        const bd = [];
        const rd = [];
        const sd = [];
        const ud = [];
        for(var i=0;i<BuyTableData.length;i++){
            var x = BuyTableData[i];
            if(x.name.toLowerCase().startsWith(searchParameter)|| x.method.toLowerCase().startsWith(searchParameter) || x.method_type.toLowerCase().startsWith(searchParameter) ||
                x.device.toLowerCase().startsWith(searchParameter)|| x.value.toLowerCase().startsWith(searchParameter) || x.value_type.toLowerCase().startsWith(searchParameter) ||
                x.quantity.toLowerCase().startsWith(searchParameter) || x.quantity_type.toLowerCase().startsWith(searchParameter) || x.order_acc.toLowerCase().startsWith(searchParameter) ||
                x.order_type.toLowerCase().startsWith(searchParameter)
            ){
                bd.push(x);
            }
        }
        
        for(var i=0;i<RecurringTableData.length;i++){
            var x = RecurringTableData[i];
            if(x.name.toLowerCase().startsWith(searchParameter)|| x.method.toLowerCase().startsWith(searchParameter) || x.method_type.toLowerCase().startsWith(searchParameter) ||
                x.device.toLowerCase().startsWith(searchParameter)|| x.value.toLowerCase().startsWith(searchParameter) || x.value_type.toLowerCase().startsWith(searchParameter) ||
                x.quantity.toLowerCase().startsWith(searchParameter) || x.quantity_type.toLowerCase().startsWith(searchParameter) || x.order_acc.toLowerCase().startsWith(searchParameter) ||
                x.order_type.toLowerCase().startsWith(searchParameter)
            ){
                rd.push(x);
            }
        }
        
        for(var i=0;i<SellOrdersData.length;i++){
            var x = SellOrdersData[i];
            if(x.name.toLowerCase().startsWith(searchParameter)|| x.method.toLowerCase().startsWith(searchParameter) || x.method_type.toLowerCase().startsWith(searchParameter) ||
                x.device.toLowerCase().startsWith(searchParameter)|| x.value.toLowerCase().startsWith(searchParameter) || x.value_type.toLowerCase().startsWith(searchParameter) ||
                x.quantity.toLowerCase().startsWith(searchParameter) || x.quantity_type.toLowerCase().startsWith(searchParameter) || x.time.toLowerCase().startsWith(searchParameter) ||
                x.date.toLowerCase().startsWith(searchParameter)
            ){
                sd.push(x);
            }
        }
        
        for(var i=0;i<UserTableData.length;i++){
            var x = UserTableData[i];
            if(x.name.toLowerCase().startsWith(searchParameter)|| x.device.toLowerCase().startsWith(searchParameter) || x.status.toLowerCase().startsWith(searchParameter) ||
                x.dob.toLowerCase().startsWith(searchParameter)|| x.Signedup.toLowerCase().startsWith(searchParameter) || x.account.toLowerCase().startsWith(searchParameter) ||
                x.createdon.toLowerCase().startsWith(searchParameter) || x.time.toLowerCase().startsWith(searchParameter)
            ){
                ud.push(x);
            }
        }
        

        setBuyData(bd);
        setRecurringData(rd);
        setSellData(sd);
        setUserData(ud);
    }

  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Search" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>
      <Input onChange={(e)=>{
        console.log(e.target.value);
        setSearchParameter(e.target.value);
      }} style={{borderRadius:'12px', height:'40px', border:'1px solid black' }} size="large" placeholder="Search Metfolio"  suffix={<SearchOutlined onClick={searchDataInTables} style={{color:yellowColor, fontSize:'28px'}}  />} />
      <div style={{height:'20px'}}/>
        <BuyOrders tabledata={ buyData} className='mb-5 mb-xl-8'/>
        <RecurringOrders tabledata={ recurringData } className='mb-5 mb-xl-8'/>
        <SellOrders tableData={ sellData } className='mb-5 mb-xl-8'/>
        <UsersTable tableData={ userData} className='mb-5 mb-xl-8'/>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default Search