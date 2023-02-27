import React, { useEffect } from 'react';
import { toAbsoluteUrl } from '../_metronic/helpers/AssetHelpers.ts';
import { Col, Row } from 'antd';
import { gray2Color, greenColor,greyButtonColor,greyColor,isMobile,navyColor, sidebarColor } from '../const';
import { Link } from 'react-router-dom';
const Login = (props) => {

  const cssStyle = {
    container:{
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:sidebarColor,
    },
    microsoftContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: greyButtonColor,
      padding:'8px 32px',
      flexGrow:'1',
      borderRadius:'8px',
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)'
    },
    card: {
      display:'inline',
      flexDirection:'column',
      marginTop:'48px',
      padding: isMobile(props.width)? '50px 16px' :"60px 16px",
      width:isMobile(props.width)? '300px' : "600px",
      borderRadius:'12px',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'

    },
    navyText:{
      fontFamily: 'Poppins',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '30px',
      letterSpacing: '0em',
      color:'black',
      textAlign:'center'
    },
    normalText:{
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '30px',
      letterSpacing: '0em',
      color:'black',
    },
  };

  return (
    <Col style={cssStyle.container}>
    <img alt='Logo' src='/images/logo.png' style={{width: isMobile(props.width)?'240px':'300px'}}/>
    <Col style={cssStyle.card}>
      <div style={cssStyle.navyText}>Sign In to Metfolio</div>
      <div style={{height:'24px'}}/>
      <Link to='/dashboard'>
      <a>
      <Row style={cssStyle.microsoftContainer}>
        <img alt='microsoft' src='/images/Microsoft_logo.svg.png' style={{width:'20px', marginRight:'16px'}}/>
        
        <div style={cssStyle.normalText}>Continue with Microsoft</div>
      </Row>
      </a>
      </Link>
    </Col>

    </Col>
    
  );
    };


export { Login };
