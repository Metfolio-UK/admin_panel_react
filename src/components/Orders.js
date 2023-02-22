import { Row,Col } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { blacky, cyanColor, getNameInitals, greyColor, nameSymbolColor, navyColor, paginationColor, sidebarColor, tealColor, yellowColor } from '../const';
import DonutChart from './DonutChart';

const Order = () => {
    const cssStyle = {
        container : {
            display: 'flex',
            flexDirection:'column',
            height:'120px',
            backgroundColor:'white',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '21px',
            
            letterSpacing: '0em',
            color:blacky,
            borderRadius:'12px',
            padding:'24px 30px',
            
        },
        Bottomcontainer : {
            
            top:'-55px',
            display: 'flex',
            flexDirection:'row',
            height:'90px',
            backgroundColor:'white',
            fontFamily: 'Poppins',
            fontSize: '17px',
            fontWeight: '600',
            lineHeight: '26px',
            alignItems:'center',
            letterSpacing: '0em',
            color:blacky,
            borderRadius:'12px',
            padding:'24px 30px',
            
        },
        blackdot:{
            height:'6px',
            width:'6px',
            backgroundColor:'black',
            borderRadius:'2px',
        },
        blackdotfaded:{
            height:'6px',
            width:'6px',
            backgroundColor:'black',
            borderRadius:'2px',
            marginRight:'4px',
        },
        whiteContainer:{
            display: 'flex',
            flexDirection:'column',
            backgroundColor:'white',
            borderRadius:'12px',
            padding:'32px',
            top:'-35px',
            alignItems:"center"
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
            fontSize: '15px',
            fontWeight: '600',
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'left',
            color:navyColor,
        },
        blueButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'20px 12px',
            height:'42px',
            width:'143px',
            backgroundColor:sidebarColor,
            borderRadius:'9px',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontWeight: '500',
            lineHeight: '17.58px',
            letterSpacing: '0.02em',
            color:'white',
            marginTop:'17px',
        },
        line:{
            padding:'0px 0px',
            height:'1px',
            width:'110%',
            opacity:'70%',
            backgroundColor:greyColor,
            marginTop:'30px'
        },
        colorDots:{
            height:'11px',
            width:'11px',
            borderRadius:'20px',
            marginRight:'10px',

        },
        fadedText1:{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '13px',
            letterSpacing: '-2%',
            color:greyColor,
        },

      };
    
      return (
    
        <Col style={{position:'relative'}}>
            
        <Col style={cssStyle.container}>
            <Row style={{justifyContent:'space-between'}}><div style={{marginTop:'4px',fontFamily: 'Poppins',fontSize: '18px',fontWeight: '600',lineHeight: '21px',}}>Orders (last 24hrs)</div>
            <Row style={{marginTop:'12px'}}>
            <div style={cssStyle.blackdotfaded}></div>
            <div style={cssStyle.blackdot}></div>
            </Row>
            </Row>
            <div style={{...cssStyle.fadedText,marginTop:'4px',lineHeight:'21px'}}>Order Distribution Last 24hrs</div>
            

            
            
        
        </Col>
        <Col style={cssStyle.whiteContainer}>
               <div style={{marginTop:'-50px'}}><DonutChart/></div>
               <div style={{...cssStyle.fadedText,marginTop:'-152px'}}>Total</div>
               <div style={{...cssStyle.navyText,fontWeight:'700'}}>£5234.56</div>
               <div style={{...cssStyle.fadedText,fontSize:"16px",textAlign:"center",lineHeight:'26px',letterSpacing:'-2%'}}>In the last 24 hrs, 75% of orders were buy orders</div>
               <div style={{...cssStyle.blueButton,textAlign:'center'}}>   View All Orders</div>
               <div style={cssStyle.line}></div>
               
               

        </Col>
        <Col style={cssStyle.Bottomcontainer}>
        <Row style={{flexGrow:'1',justifyContent:'space-evenly'}}>
                <Row><div style={{...cssStyle.colorDots,backgroundColor:cyanColor}}></div>
               <div style={cssStyle.fadedText1}>Sell</div></Row>
               
               <Row><div style={{...cssStyle.colorDots,backgroundColor:yellowColor}}></div>
               <div style={cssStyle.fadedText1}>Buy</div></Row>
               <Row><div style={{...cssStyle.colorDots,backgroundColor:sidebarColor}}></div>
               <div style={cssStyle.fadedText1}>Recurring</div></Row>
               
      </Row>
        </Col>
        </Col>
      )
    }
    
    export default Order