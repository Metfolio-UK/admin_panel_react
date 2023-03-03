import React from 'react';
import { Input } from 'antd';
import { Row,Col } from 'antd'
import {blacky, isMobile, yellowColor, greyButtonColor} from '../const';
import { ProfileDetails } from '../helpers/dummydata';
const ProfileSettings = (props) => {


    const cssStyle = {
        
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
          padding:'24px',
          borderRadius:'20px 20px 0 0',
          backgroundColor:"white",
          marginTop:'30px',
          justifyContent:'space-between'

        },
        saveContainer:{
          display:'flex',
          flexDirection:'row',
          backgroundColor:"white",
          marginTop:'30px',
          justifyContent:'right'
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
          padding:'24px',
          borderTop:'1px solid #E4E6EF',
          borderRadius:'0 0 20px 20px ',
          backgroundColor:"white",
          
        },
        formLeft:{
          fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: blacky,
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
          cursor:'pointer'
      },
      fadedContainer:{ borderRadius:'8px', height:'32px' , border:'1px solid white', backgroundColor:greyButtonColor, marginTop: isMobile(props.width)?"4px":null },
        dashedContainer:{ padding:'4px 8px', borderRadius:'12px', border:`1px dashed ${yellowColor}` },
        space:{
          marginBottom:'12px',
          alignItems:'center',
        },
      };
    return(<Col>
        <Row style={cssStyle.containerProfile}>
          <div style={cssStyle.titleProfile}>Profile Details</div>
  
          
        </Row>
        
        <Col style={cssStyle.containerProfileBottom}>
            <Row style={cssStyle.space}>
              <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Full Name</Col>
              <Col xs={24} sm={24} md={16}>
              <Input style={cssStyle.fadedContainer}  placeholder={ProfileDetails[0].fullname }/>   
              </Col>         
            </Row>
            <Row style={cssStyle.space}>
            <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Email</Col>
              <Col xs={24} sm={24} md={16}>
              <Input style={cssStyle.fadedContainer}  placeholder={ProfileDetails[0].email }/>   
              </Col> 
            
            </Row>
            <Row style={cssStyle.space}>
            <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Contact Phone</Col>
              <Col xs={24} sm={24} md={16}>
              <Input style={cssStyle.fadedContainer}  placeholder={ProfileDetails[0].phone }/>   
              </Col> 
                      
            </Row>
            <Row style={cssStyle.space}>
            <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Home Address</Col>
              <Col xs={24} sm={24} md={16}>
              <Input style={cssStyle.fadedContainer}  placeholder={ProfileDetails[0].address }/>   
              </Col> 
            </Row>
            <Row style={cssStyle.space}>
            <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Signup Method</Col>
              <Col xs={24} sm={24} md={16}>
              <Input style={cssStyle.fadedContainer}  placeholder={ProfileDetails[0].signupmethod }/>   
              </Col> 
            
            </Row>
            <Row style={cssStyle.saveContainer}>
            <div onClick={props.changeTabs} style={cssStyle.tealButton}> Save User</div>
          
        </Row>
          </Col>
          
        </Col>
        
)
};

export default ProfileSettings;