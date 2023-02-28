import React,{useState} from 'react';
import { Input } from 'antd';
import { Row,Col } from 'antd'
import {blacky, cyanColor, greenColor, greyColor, isMobile, lightGreenColor, nameSymbolColor, yellowColor, tealColor} from '../const';
import { ProfileDetails } from '../helpers/dummydata';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const ProfileSettings = (props) => {
    const [text, setText] = useState('Edit me!');

  const handleInput = (event) => {
    setText(event.target.innerText);
  };


    const cssStyle = {
        container:{
          display:'flex',
          flexDirection:'row',
          padding:'16px 16px 0 16px',
          borderRadius:'16px',
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
        containerProfile:{
          display:'flex',
          flexDirection:'row',
          padding:'35px',
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
          padding:'20px',
          borderTop:'1px solid #E4E6EF',
          borderRadius:'0 0 20px 20px ',
          backgroundColor:"white",
          
        },
        formLeft:{
          fontFamily: 'Poppins',
            fontSize: '13px',
            fontWeight: '550',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: greyColor,
            marginLeft:'15px',
            marginTop:props.width>767?"30px":'10px'
        },
        formRight:{
          fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '550',
            lineHeight: '18px',
            letterSpacing: '0em',
            color: blacky,
            marginLeft:props.width>767?"300px":'15px',
            marginTop:props.width>767?"30px":'10px'
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
      },
      fadedContainer:{
        opacity:'40%',
        backgroundColor:'#e7e7e7',
        
        color:blacky,
        marginLeft:props.width>767?"300px":'15px',
        marginTop:props.width>767?"30px":'10px'
      },
        dashedContainer:{ padding:'4px 8px', borderRadius:'12px', border:`1px dashed ${yellowColor}` },
      };
    return(<Col>
        <Row style={cssStyle.containerProfile}>
          <div style={cssStyle.titleProfile}>Profile Details</div>
          <div style={cssStyle.tealButton}> Edit User</div>
          
        </Row>
        
        <Col style={cssStyle.containerProfileBottom}>
          <Row>
          <Col style={{justifyContent:'space-evenly'}}>
            <Row style={{flexDirection:props.width>200?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Full Name</div>
              <Input style={cssStyle.fadedContainer} placeholder="Name" />
            
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Email Address</div>
              <Input style={cssStyle.fadedContainer} placeholder="Email" />
            
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Contact Phone</div>
              <Input style={cssStyle.fadedContainer} placeholder="Phone Number" />
                      
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
              <div style={{...cssStyle.formLeft,color:blacky}}>Home Address</div>
              <Input style={cssStyle.fadedContainer} placeholder="Address" />
                      
            </Row>
            <Row style={{flexDirection:props.width>767?"row":'column'}}>
            <div style={{...cssStyle.formLeft,color:blacky}}>Signup Method</div>
            <Input style={cssStyle.fadedContainer} placeholder="Signup Method" />
               
            
            </Row>
          
          </Col>
          </Row>

          

        
        </Col>
        </Col>
        
)
};

export default ProfileSettings;