import {  Layout } from 'antd';
import React, { useState } from 'react';
import { Row,Col,Checkbox } from 'antd'
import {cyanColor, greenColor, greyColor, isMobile, lightGreenColor, nameSymbolColor, yellowColor} from '../const';
import Navbar from '../components/navbar';

import styled from 'styled-components';
const { Content, Footer } = Layout;

const CurrentUser = (props) => {
    const [checked, setChecked] = useState(false);

    const onChange = () =>{
        setChecked(!checked);
    }
    const cssStyle = {
        container:{
          display:'flex',
          flexDirection:'row',
          padding:'16px',
          borderRadius:'16px',
          backgroundColor:"white"
        },
        Colcontainer:{
            display:'flex',
            flexDirection:'column',
            padding:'16px',
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
            height:'12px',
            width:'12px',
            borderRadius:'20px',
            marginRight:'8px',
        },
        navyText:{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '30px',
          letterSpacing: '0em',
          color:'black',
          textAlign:'left'
        },
        normalText:{
          fontFamily: 'Poppins',
          fontSize: '14px',
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
          flexDirection:'row',
          padding:'35px',
          borderRadius:'20px 20px 0 0',
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
            marginTop:props.width>767?"30px":'10px'
        },
        formRight:{
          fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '550',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: blacky,
            marginLeft:props.width>767?"300px":'15px',
            marginTop:props.width>767?"30px":'10px'
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
        marginLeft:props.width>767?"300px":'15px',
        marginTop:props.width>767?"30px":'10px'
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
      };
  return (
    <Layout
    className="site-layout"
    style={{  marginLeft: isMobile(props.width)?0: 150 }}>
    <Content>
      <Navbar heading="User Profile" width={props.width} showDrawer={props.showDrawer}/>
      <div style={{height:'20px'}}/>
      <div style={{ padding:'20px' }}>
        <Row style={cssStyle.container}>
            <Col><Col style={cssStyle.nameSymbol}>MR </Col>
            </Col>
            <Col style={{ marginTop: props.width<510?"16px":null,marginLeft:props.width<510?null:"20px"   }}>
                <Row>
                    <div style={cssStyle.navyText}>Meeren Rainga</div>
                    <div style={cssStyle.verified}>Verified</div>
                </Row>
                <Row style={cssStyle.container2}>
                    <div style={{...cssStyle.colordots, backgroundColor:cyanColor}}/>
                    <div style={cssStyle.normalText}>Android</div>
                </Row>
                <Row style={{marginTop:'12px', display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
                <Col style={cssStyle.dashedContainer}>
                    <div style={cssStyle.navyText}>22.345 g</div>
                    <div style={cssStyle.fadedText}>Physical Gold</div>
                </Col>
                <Col style={cssStyle.dashedContainer}>
                    <div style={cssStyle.navyText}>22.345 g</div>
                    <div style={cssStyle.fadedText}>Goal Account</div>
                </Col>
            </Row>
            </Col>
        </Row>
        <Col style={cssStyle.Colcontainer}>
            <div style={{...cssStyle.navyText, marginBottom:'16px'}}>Delete User</div>
            <Checkbox onChange={onChange}>I confirm this account deletion</Checkbox>
            {!checked&& <div style={{...cssStyle.redText,marginBottom:'12px'}}>Please check the box to delete the account</div>}
            <Row style={{ justifyContent:'right' }}>
            <div className='btn' style={cssStyle.yellowButton}>Delete User</div>   
            </Row>     
        </Col>
        <Col>
        <Row style={cssStyle.containerProfile}>
          <Row style={{flexGrow:'1'}}><div>
            <Tabs defaultActiveKey="1" onChange={handleTabChange} style={{width:'100%'}} >
              <TabPane tab="Tab 1" key="1" >
              <Profile/>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
              </TabPane>
              </Tabs></div></Row>
          
          
        </Row>
        <Col>
        <Row style={cssStyle.containerProfile}>
          <div style={cssStyle.titleProfile}>Profile Details</div>
          <div style={cssStyle.tealButton}> Edit User</div>
          
        </Row>
        
        <Col style={cssStyle.containerProfileBottom}>
          <Row>
          <Col style={{justifyContent:'space-evenly'}}>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={cssStyle.formLeft}>Full Name</div>
              <div style={{...cssStyle.formRight,marginLeft:props.width>767?"330px":'15px'}}>{ProfileDetails[0].fullname}</div>
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={cssStyle.formLeft}>Email Address</div>
              <div style={cssStyle.formRight}>{ProfileDetails[0].email}</div>
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={cssStyle.formLeft}>Contact Phone</div>
              <div style={cssStyle.formRight}>{ProfileDetails[0].phone}</div>
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={cssStyle.formLeft}>Home Address</div>
              <div style={cssStyle.formRight}>{ProfileDetails[0].address}</div>
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
            <div style={{...cssStyle.formLeft}}>Signup Method</div>
            <div style={{...cssStyle.formRight,marginBottom:'30px'}}>{ProfileDetails[0].signupmethod}</div>
            </Row>
          
          </Col>
          </Row>

          

        
        </Col>
        </Col>
        <Col>
        <Row style={cssStyle.containerProfile}>
          <div style={cssStyle.titleProfile}>Profile Details</div>
          <div style={cssStyle.tealButton}> Edit User</div>
          
        </Row>
        
        <Col style={cssStyle.containerProfileBottom}>
          <Row>
          <Col style={{justifyContent:'space-evenly'}}>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Full Name</div>
              <Input style={cssStyle.fadedContainer} placeholder="Name" />
            
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Email Address</div>
              <Input style={cssStyle.fadedContainer} placeholder="Email" />
            
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Contact Phone</div>
              <Input style={cssStyle.fadedContainer} placeholder="Phone Number" />
                      
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Home Address</div>
              <Input style={cssStyle.fadedContainer} placeholder="Address" />
                      
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
            <div style={{...cssStyle.formLeft,color:blacky}}>Signup Method</div>
            <Input style={cssStyle.fadedContainer} placeholder="Signup Method" />
               
            
            </Row>
          
          </Col>
          </Row>

          

        
        </Col>
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

export default CurrentUser