import { Row,Col } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { getNameInitals, greyColor, nameSymbolColor, navyColor, paginationColor, tealColor, yellowColor } from '../const';

const CustomerHolding = () => {

  const cssStyle = {
    container : {
        display: 'flex',
        flexDirection:'row',
        height:'120px',
        backgroundColor:yellowColor,
        fontFamily: 'Poppins',
        fontSize: '17px',
        fontWeight: '600',
        lineHeight: '26px',
        
        letterSpacing: '0em',
        color:'white',
        borderRadius:'12px',
        padding:'24px 30px',
        justifyContent:'space-between',
    },
    whitedot:{
        height:'6px',
        width:'6px',
        backgroundColor:'white',
        borderRadius:'12px',
    },
    whitedotfaded:{
        opacity:'70%',
        height:'6px',
        width:'6px',
        backgroundColor:'white',
        borderRadius:'12px',
        marginRight:'4px',
    },
    whiteContainer:{
        display: 'flex',
        flexDirection:'column',
        height:'218px',
        backgroundColor:'white',
        borderRadius:'12px',
        padding:'32px',
        top:'-35px',
        justifyContent:'space-between'
    },
    fadedText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:greyColor,
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

    <Col style={{position:'relative'}}>
    <Row style={cssStyle.container}>
        <div>Customer Holding</div>
        <Row style={{marginTop:'12px'}}>
        <div style={cssStyle.whitedotfaded}></div>
        <div style={cssStyle.whitedot}></div>
        </Row>
    </Row>
    <Col style={cssStyle.whiteContainer}>
        <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
            <Col>
                <div style={{...cssStyle.fadedText, textAlign:'left'}}>Monetary Value</div>
                <div style={{...cssStyle.navyText, textAlign:'left'}}>??4,500</div>
            </Col>
            <Col>
                <div style={{...cssStyle.fadedText, textAlign:'right'}}>Quantity (g)</div>
                <div style={{...cssStyle.navyText, textAlign:'left'}}>56.543 g</div>
            </Col>
        </Row>
        <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
            <Col>
                <div style={{...cssStyle.fadedText, textAlign:'left'}}>Last 24 hrs</div>
                <div style={{...cssStyle.navyText, textAlign:'left'}}>??450.00</div>
            </Col>
            <Col>
                <div style={{...cssStyle.fadedText, textAlign:'right'}}>Last 24 hrs</div>
                <div style={{...cssStyle.navyText, textAlign:'right'}}>45.235 g</div>
            </Col>
        </Row>
    </Col>
    </Col>
  )
}

export default CustomerHolding