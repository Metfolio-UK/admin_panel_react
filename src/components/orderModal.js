import React, {useState} from 'react'
import { Row,Col, Modal } from 'antd';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { getNameInitals, greyButtonColor, greyColor, nameSymbolColor, navyColor, yellowColor } from '../const';
import { useNavigate } from 'react-router-dom';
const OrderModal = (props) => {
    const navigate = useNavigate();
    const PopupModal = styled(Modal)`
        & .ant-modal-content {
            padding:0px;
        }
    `;
        
    const cssStyle = {
        container:{
            display:'flex',
            flexDirection:'column',
            padding:'8px 12px 12px 12px',
            backgroundColor:"white",
            borderRadius:'16px'
          },
          navyText:{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0em',
            color: navyColor,
          },
          fadedText:{
            fontFamily: 'Poppins',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0em',
            color: greyColor,
        
        },
        headerRow:{
            display:'flex',
            flexDirection:'row',
            flexGrow:1,
            justifyContent:'space-between'
          },
          nameRow:{
            display:'flex',
            flexDirection:'row',
            flexGrow:1,
            justifyContent:'space-between',
            marginTop:'20px', borderBottom:`0.2px solid ${greyColor}`, paddingBottom:'4px'
          },
          contentRow:{
            display:'flex',
            flexDirection:'row',
            flexGrow:1,
            justifyContent:'space-between',
            marginTop:'8px', borderBottom:`0.2px solid ${greyColor}`, 
          },
        date:{ display:'flex', flexDirection:'column', alignItems:'end', justifyContent:'end' },
        headerIcon:{ display:'flex', flexDirection:'column', alignItems:'center' },
        viewUsercol:{ display:'flex', flexDirection:'column', justifyContent:'center' },
        nameCol:{ display:'flex', flexDirection:'column', alignItems:'left',justifyContent:'center', marginLeft:'8px' },
        nameSymbol:{
            display:'flex',
            height:'50px',
            width:'50px',
            backgroundColor: nameSymbolColor,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'4px',
            fontFamily:'Poppins',
            fontSize:'24px',
            fontWeight:'600',
            border:`1px solid ${yellowColor}`
        },
        yellowButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'6px 10px',
            backgroundColor:yellowColor,
            borderRadius:'6px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0em',
            color:'white',
        },
        downloadButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'6px 10px',
            backgroundColor:yellowColor,
            borderRadius:'24px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '0em',
            color:'white',
            justifyContent:'center'
        },
    };
    return (

        
        <PopupModal closable={false} footer={null} width={320}  open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}>
          <div style={cssStyle.container}>
            <Row style={cssStyle.headerRow}>
                <CloseOutlined onClick={props.handleCancel} style={{ color:yellowColor }}/>
                <Col style={cssStyle.headerIcon}>
                    <img alt='popupLogo' src={props.data.image} style={{ width: props.data.imageWidth,height:props.data.imageHeight, marginTop:props.data.marginTop }}/>
                    <div style={cssStyle.navyText}>Order #{props.data.order_id}</div>
                </Col>
                <Col style={cssStyle.date}>
                    <div style={{...cssStyle.navyText, fontWeight:'600'}}>{props.data.time}</div>
                    <div style={cssStyle.fadedText}>{props.data.date}</div>
                </Col>
            </Row>
            <Row style={cssStyle.nameRow}>
                <Row>
                    <Col style={cssStyle.nameSymbol}>{ getNameInitals(props.data.name) }</Col>
                    <Col style={cssStyle.nameCol}>
                        <div style={{...cssStyle.navyText, fontWeight:'600'}}>{props.data.name}</div>
                        <div style={cssStyle.fadedText}>{props.data.signupMethod}</div>

                    </Col>
                </Row>
                <Col style={cssStyle.viewUsercol}>
                <div className='btn' onClick={()=>{
                    props.handleCancel();
                    navigate('/currentUser');
                }} style={cssStyle.yellowButton}>View User</div>   
                </Col>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row1left}</div>
                <div style={cssStyle.navyText}>{props.data.row1right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row2left}</div>
                <div style={cssStyle.navyText}>{props.data.row2right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row3left}</div>
                <div style={cssStyle.navyText}>{props.data.row3right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row4left}</div>
                <div style={cssStyle.navyText}>{props.data.row4right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row5left}</div>
                <div style={cssStyle.navyText}>{props.data.row5right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row6left}</div>
                <div style={cssStyle.navyText}>{props.data.row6right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row7left}</div>
                <div style={cssStyle.navyText}>{props.data.row7right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row8left}</div>
                <div style={cssStyle.navyText}>{props.data.row8right}</div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>{props.data.row1left}</div>
                <div style={cssStyle.navyText}>{props.data.row1right}</div>
            </Row>
            <div style={{height:'100px'}}/>
            <div className='btn' style={cssStyle.downloadButton}>Download Order Receipt</div>   
          </div>
        </PopupModal>
      
    );
}

export default OrderModal