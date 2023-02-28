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
            <Col style={cssStyle.nameSymbol}>MR</Col>
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
        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }} >
      Metfolio ©2023. All Rights Reserved.
    </Footer>
  </Layout>
  )
}

export default CurrentUser