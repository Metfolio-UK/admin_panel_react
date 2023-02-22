import { Row,Col } from 'antd'
import React from 'react'
import { blacky, cyanColor, dashColor, greyColor, navyColor, sidebarColor, yellowColor } from '../const';
import DonutChart from './DonutChart';

const OrderChart = () => {
    const cssStyle = {
        topContainer : {
            display: 'flex',
            flexDirection:'column',
            height:'90px',
            backgroundColor:'white',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '21px',
            letterSpacing: '0em',
            color:blacky,
            borderRadius:'12px 12px 0 0',
            
        },
        middleContainer:{
            display: 'flex',
            padding:'0px 12px',
            flexDirection:'column',
            height:'261px',
            backgroundColor:'white',
            alignItems:"center"
        },
        bottomContainer : {
            
            display: 'flex',
            flexDirection:'row',
            height:'80px',
            backgroundColor:'white',
            fontFamily: 'Poppins',
            fontSize: '17px',
            fontWeight: '600',
            lineHeight: '26px',
            alignItems:'center',
            letterSpacing: '0em',
            color:dashColor,
            borderTop: '1px solid #E4E6EF',
            borderRadius:'0 0 12px 12px',
            marginBottom: '20px'
            
        },
        blackDot:{
            height:'6px',
            width:'6px',
            backgroundColor:'black',
            borderRadius:'2px',
        },
        blackDot2:{
            height:'6px',
            width:'6px',
            backgroundColor:'black',
            borderRadius:'2px',
            marginRight:'4px',
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
            fontSize: '16px',
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
            backgroundColor:sidebarColor,
            borderRadius:'9px',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontWeight: '500',
            lineHeight: '17.58px',
            letterSpacing: '0.02em',
            color:'white',
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
            color:greyColor,
        },

      };
    
      return (
    
        <Col>
            
        <Col style={cssStyle.topContainer}>
            <Row style={{justifyContent:'space-between'}}>
            <div style={{marginLeft:'30px',marginTop:'30px',fontFamily: 'Poppins',fontSize: '18px',fontWeight: '600',lineHeight: '21px',}}>Orders (last 24hrs)</div>
            <Row style={{marginTop:'40px',marginRight:'30px'}}>
            <div style={cssStyle.blackDot2}></div>
            <div style={cssStyle.blackDot}></div>
            </Row>
            </Row>
            <div style={{...cssStyle.fadedText,marginLeft:'30px',marginTop:'4px',lineHeight:'21px'}}>Order Distribution Last 24hrs</div>
            

            
            
        
        </Col>
        <Col style={cssStyle.middleContainer}>
               <div style={{}}><DonutChart/></div>
               <div style={{...cssStyle.fadedText,marginTop:'-152px'}}>Total</div>
               <div style={{...cssStyle.navyText,fontWeight:'700'}}>£52349.56</div>
               <div style={{...cssStyle.fadedText,fontSize:"16px",textAlign:"center",lineHeight:'26px',letterSpacing:'-2%',paddingBottom:'30px'}}>In the last 24 hrs, 75% of orders were buy orders</div>
               <div style={{...cssStyle.blueButton,textAlign:'center'}}>   View All Orders</div>
               
               

        </Col>
        <Col style={cssStyle.bottomContainer}>
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
    
    export default OrderChart