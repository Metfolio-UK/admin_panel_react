import { Row,Col } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { blacky, cyanColor, getNameInitals, greyColor, nameSymbolColor, navyColor, paginationColor, sidebarColor, tealColor, yellowColor } from '../const';
import DonutChart from './DonutChart';

const Order = () => {
    const cssStyle = {
        container : {
            display: 'flex',
            flexDirection:'row',
            height:'120px',
            width:'373px',
            backgroundColor:'white',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '21px',
            
            letterSpacing: '0em',
            color:blacky,
            borderRadius:'12px',
            padding:'24px 30px',
            justifyContent:'space-between',
            
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
            height:'316px',
            width: '373px',
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
            fontSize: '20px',
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
            width:'373px',
            opacity:'70%',
            backgroundColor:greyColor,
            marginTop:'30px'
        },
        colorDots:{
            marginLeft:'64px',
            marginTop:'19px',
            height:'11px',
            width:'11px',
            borderRadius:'20px',

        },
        fadedText1:{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '26px',
            letterSpacing: '-2%',
            color:greyColor,
            marginTop:'11px',
            marginLeft:'5px'
        },

      };
    
      return (
    
        <Col style={{position:'relative'}}>
            
        <Col style={cssStyle.container}>
            <Row style={{justifyContent:'space-between'}}><div style={{marginLeft:'4px',marginTop:'4px',fontFamily: 'Poppins',fontSize: '18px',fontWeight: '600',lineHeight: '21px',}}>Orders (last 24hrs)</div>
            <Row style={{marginTop:'12px'}}>
            <div style={cssStyle.blackdotfaded}></div>
            <div style={cssStyle.blackdot}></div>
            </Row>
            <div style={{...cssStyle.fadedText,marginLeft:'4px',marginTop:'-20px',lineHeight:'21px'}}>Order Distribution Last 24hrs</div></Row>
            

            
            
        
        </Col>
        <Col style={cssStyle.whiteContainer}>
               <div style={{marginTop:'-50px'}}><DonutChart/></div>
               <div style={{...cssStyle.fadedText,marginTop:'-152px'}}>Total</div>
               <div style={{...cssStyle.navyText,fontWeight:'700'}}>£5234.56</div>
               <div style={{...cssStyle.fadedText,fontSize:"16px",textAlign:"center",lineHeight:'26px',letterSpacing:'-2%'}}>In the last 24 hrs, 75% of orders were buy orders</div>
               <div style={{...cssStyle.blueButton,textAlign:'center'}}>   View All Orders</div>
               <div style={cssStyle.line}></div>
               <Row >
               <div style={{...cssStyle.colorDots,backgroundColor:cyanColor,marginLeft:'-5px'}}></div>
               <div style={cssStyle.fadedText1}>Sell</div>
               <div style={{...cssStyle.colorDots,backgroundColor:yellowColor}}></div>
               <div style={cssStyle.fadedText1}>Buy</div>
               <div style={{...cssStyle.colorDots,backgroundColor:sidebarColor}}></div>
               <div style={cssStyle.fadedText1}>Recurring</div>
               </Row>
               

        </Col>
        </Col>
      )
    }
    
    export default Order