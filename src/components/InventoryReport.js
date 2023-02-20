import React from 'react';
import '../_metronic/assets/sass/style.scss';
import {  greyColor, nameSymbolColor, navyColor, tealColor } from '../const';
import { Row,Col } from 'antd';
import styled from 'styled-components';


const InvReport = () => {
    const cssStyle = {
       
        tealButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            height:'40px',
            padding:'0px 12px',
            backgroundColor:tealColor,
            borderRadius:'8px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0em',
            color:'white',
        },
        cardpadding:{
            padding:'40px 30px',
        },
        container:{
          display:'flex',
          flexDirection:'row',
          padding:"36px 32px",
          backgroundColor:'white',
          borderRadius:'8px',
          justifyContent:'space-between',
          marginBottom: '20px'
        },
        fadedText:{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',
          color:'#80808F',
      },
      navyText:{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '30px',
          letterSpacing: '0em',
          textAlign: 'left',
          color:navyColor,
      }
    };
  return (
    <Row style={cssStyle.container}>
      <Col>
        <div style={cssStyle.navyText}>Create Inventory Report</div>
        <div style={cssStyle.fadedText}>Enter grams purchased from suppliers</div>
      </Col>
      <div style={cssStyle.tealButton}>Start now</div>
    </Row>
  );
};

export { InvReport };
