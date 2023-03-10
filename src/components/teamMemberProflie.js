import React from 'react';
import { Row,Col } from 'antd'
import {blacky,  yellowColor, greyColor, navyColor} from '../const';
import { ProfileDetails } from '../helpers/dummydata';
const TeamMemberProfile = (props) => {

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
            fontSize: '13px',
            fontWeight: '500',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: greyColor,
        },
        formRight:{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '550',
          lineHeight: '18px',
          letterSpacing: '0em',
          color: blacky,
        },
        space:{
          marginBottom:'12px',
        },
        tealButton:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          padding:'8px 19px',
          backgroundColor: navyColor,
          borderRadius:'6px',
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '18px',
          letterSpacing: '0em',
          color:'white',
          cursor:'pointer',
      },
      };
    return(
    <Col>
        <Row style={cssStyle.containerProfile}>
          <div style={cssStyle.titleProfile}>Profile Details</div>
          <div className='btn' style={cssStyle.tealButton}>Log out</div>
          
        </Row>
        
        <Col style={cssStyle.containerProfileBottom}>
            <Row style={cssStyle.space}>
              <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Full Name</Col>
              <Col xs={24} sm={24} md={16} style={cssStyle.formRight}>{props.fullname}</Col>
            </Row>
            <Row style={cssStyle.space}>
            <Col xs={24} sm={24} md={8} style={cssStyle.formLeft}>Email Address</Col>
              <Col xs={24} sm={24} md={16} style={cssStyle.formRight}>{props.email}</Col>
            </Row>
            

          

        
        </Col>
    </Col>
)
};
export default TeamMemberProfile;