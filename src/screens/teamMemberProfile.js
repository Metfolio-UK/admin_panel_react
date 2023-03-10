import {  Layout} from 'antd';
import React, { useState } from 'react';
import { Row,Col,Checkbox } from 'antd'
import {cyanColor, greenColor, greyColor, isMobile, lightGreenColor, nameSymbolColor, yellowColor, blacky} from '../const';
import { UserOutlined} from '@ant-design/icons';

import Navbar from '../components/navbar';
import TeamMemberProfile from '../components/teamMemberProflie';
import TeamMemberTable from '../components/teamMemberTable';
import { TeamMeamberTableData } from '../helpers/dummydata';
const { Content, Footer } = Layout;

const TeamMemberProfileScreen   = (props) => {
    const [tabs, setTabs] = useState(0);
    const cssStyle = {
        container:{
          display:'flex',
          flexDirection:'column',
          padding:'16px 16px 0px 16px',
          borderRadius:'16px',
          backgroundColor:"white"
        },
        Colcontainer:{
            display:'flex',
            flexDirection:'column',
            padding:'24px',
            borderRadius:'16px',
            marginTop:'20px',
            backgroundColor:"white"
          },
        container2:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
          },
        colordots:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'40px',
            width:'40px',
            borderRadius:'24px',
            marginRight:'8px',
        },
        navyText:{
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '30px',
          letterSpacing: '0em',
          color:'black',
          textAlign:'left'
        },
        seletedTab:{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '0em',
          color:yellowColor,
          textAlign:'left',
          cursor:'pointer',
        },
        unseletedTab:{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '0em',
          color:greyColor,
          textAlign:'left',
          cursor:'pointer',
        },
        normalText:{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '30px',
          letterSpacing: '0em',
          color:'black',
        },
        redText:{
            fontFamily: 'Poppins',
            fontSize: '10px',
            fontWeight: '500',
            letterSpacing: '0em',
            color:'red',
          },
        nameSymbol:{
            display:'flex',
            height:'200px',
            width:'200px',
            backgroundColor:nameSymbolColor,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'16px',
            fontFamily:'Poppins',
            fontSize:'88px',
            fontWeight:'600',
            border:`1px solid ${yellowColor}`
        },
        verified:{
            marginLeft:'8px',
            padding:'2px 12px',
            backgroundColor: lightGreenColor,
            color:greenColor,
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '30px',
            letterSpacing: '0em',
            borderRadius:'8px',
        },
        fadedText:{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '18px',
            letterSpacing: '0em',
            // textAlign: 'left',
            color:"black",
        
        },
        containerProfile:{
          display:'flex',
          flexDirection:'col',
          padding:'24px',
          borderRadius:'20px',
          backgroundColor:"white",
          marginTop:'30px',
          justifyContent:'space-between'

        },
        titleProfile:{
          fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '30px',
            letterSpacing: '0em',
            color:"black",

        },
        containerProfileBottom:{
          display:'flex',
          flexDirection:'column',
          padding:'20px',
          borderTop:'1px solid #E4E6EF',
          borderRadius:'0 0 20px 20px ',
          backgroundColor:"white",
          
        },
        formLeft:{
          fontFamily: 'Poppins',
            fontSize: '13px',
            fontWeight: '550',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: greyColor,
            marginLeft:'15px',
        },
        formRight:{
          fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '550',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: blacky,
        },
        tealButton:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          padding:'8px 19px',
          backgroundColor:yellowColor,
          borderRadius:'6px',
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '18px',
          letterSpacing: '0em',
          color:'white',
      },
      fadedContainer:{
        opacity:'40%',
        backgroundColor:'#e7e7e7',
        
        color:blacky,
      },
        dashedContainer:{ padding:'4px 8px', borderRadius:'12px', border:`1px dashed ${yellowColor}` },
        yellowButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'8px 16px',
            backgroundColor:yellowColor,
            borderRadius:'6px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0em',
            color:'white',
        },
        space:{
          marginTop:'20px',
        },
        seletedTabBar:{ height:'2px', backgroundColor:yellowColor, marginTop:'8px' },
      };
  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="Member Profile" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>
        <Col style={cssStyle.container}>
        <Row >
            <Col><Col style={cssStyle.nameSymbol}>AC</Col>
            </Col>
            <Col style={{ marginTop: props.width<510?"16px":null,marginLeft:props.width<510?null:"20px"   }}>
                <Row>
                    <div style={cssStyle.navyText}>Abhishek Chakram</div>
                    <div style={cssStyle.verified}>Verified</div>
                </Row>
                <Row style={cssStyle.container2}>
                    <div style={{...cssStyle.colordots, backgroundColor:cyanColor}}>
                        <UserOutlined style={{ fontSize:'20px' }}/>
                    </div>
                    <div style={cssStyle.normalText}>Super Admin</div>
                </Row>
                
            </Col>
            
        </Row>
        <Row style={cssStyle.space}>
          <div style={{width:'24px'}}/>
          <Col>
            <div onClick={()=>{
              setTabs(0);
            }} style={tabs===0? cssStyle.seletedTab : cssStyle.unseletedTab}>Overview</div>
            <div style={ tabs===0? cssStyle.seletedTabBar:null}/>
          </Col>
          <div style={{width:'24px'}}/>
          <Col>
            <div onClick={()=>{
              setTabs(1);
            }} style={tabs===1? cssStyle.seletedTab : cssStyle.unseletedTab}>Team Members</div>
            <div style={ tabs===1? cssStyle.seletedTabBar:null}/>
          </Col>
        </Row>
        </Col>
        
        <Col>
        


        <Col>
          { tabs === 0 ?
          <TeamMemberProfile fullname="Abhishek Chakram" email="abhishek@metfolio.com"/> :
            <div style={{ marginTop:'30px' }}>
                <TeamMemberTable tableData={ TeamMeamberTableData  } className='mb-5 mb-xl-8'/>

            </div>
        }
        
        </Col>
       
      </Col>
        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default TeamMemberProfileScreen  