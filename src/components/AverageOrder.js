import { Row,Col } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { getNameInitals, greenColor, greyColor, nameSymbolColor, navyColor, paginationColor, red2Color, redColor, tealColor, yellow2Color, yellow3Color, yellowColor } from '../const';

const AverageOrder = () => {

  const cssStyle = {
    container : {
        display: 'flex',
        flexDirection:'row',
        height:'120px',
        backgroundColor:redColor,
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
        height:'195px',
        backgroundColor:'white',
        borderRadius:'12px',
        padding:'32px',
        top:'-35px',
        justifyContent:'space-between'
    },
    yellowText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:yellow2Color,
    },
    navyText:{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '30px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:navyColor,
    },
    greenText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:greenColor,
    },
    redText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:red2Color,
    },
    yellow2Text:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:yellow3Color,
    },
  };

  return (

    <Col style={{position:'relative'}}>
    <Row style={cssStyle.container}>
        <div>Average Order Timestamp</div>
        
    </Row>
    <Col style={cssStyle.whiteContainer}>
        <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
            <Col>
                <div style={cssStyle.yellowText}>00:00 - 06:00</div>
                <div style={cssStyle.navyText}>12%</div>
            </Col>
            <Col>
                <div style={cssStyle.greenText}>06:00 - 12:00</div>
                <div style={cssStyle.navyText}>34%</div>
            </Col>
        </Row>
        <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
            <Col>
                <div style={cssStyle.redText}>12:00 - 6:00</div>
                <div style={cssStyle.navyText}>25%</div>
            </Col>
            <Col>
                <div style={cssStyle.yellow2Text}>18:00 - 24:00</div>
                <div style={cssStyle.navyText}>27%</div>
            </Col>
        </Row>
    </Col>
    </Col>
  )
}

export default AverageOrder