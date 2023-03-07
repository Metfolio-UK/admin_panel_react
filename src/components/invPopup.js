import React, {useState} from 'react'
import { Row,Col, Modal, Input } from 'antd';
import styled from 'styled-components';
import { CloseOutlined,PlusOutlined,FileAddOutlined,DownOutlined } from '@ant-design/icons';
import { getNameInitals, greyButtonColor, greyColor, greyinput, nameSymbolColor, navyColor, yellowColor } from '../const';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { InventoryTableData } from '../helpers/dummydata';
const InvPopup = (props) => {
    const [message, setMessage] = useState('');
    const handleChange = debounce((event) => {
        setMessage(event.target.value);
      },500);
      const [message1, setMessage1] = useState('');
    const handleChange1 = debounce((event) => {
        setMessage1(event.target.value);
      },500);
      const [message2, setMessage2] = useState('');
    const handleChange2 = debounce((event) => {
        setMessage2(event.target.value);
      },500);
      const handleClick = () => {
        InventoryTableData.push(newItem);
        props.handleCancel1();
      };
      const newItem = {
        name: 'New Item',
        device: 'Super Admin',
        value: '£'+message,
        quantity: message1+' g',
        supplier: 'New Supplier',
        time: '12:34:56',
        date: '03/03/2023'
      };
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
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0em',
            color: navyColor,
            marginLeft:'4px'
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
            justifyContent:'space-between',
            marginBottom:'30px'
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
            flexDirection:'column',
            flexGrow:1,
            justifyContent:'space-between',
            marginTop:'8px', 
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
        fadedContainer:{
            display: 'flex',
            flexDirection:'row',
            height:'32px',
            backgroundColor:greyinput,
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            alignItems: 'center',
            letterSpacing: '0em',
            color:navyColor,
            borderRadius:'12px',
    
        },
    };
    return (

        
        <PopupModal closable={false} footer={null} width={320}  open={props.isModalOpen1} onOk={props.handleOk1} onCancel={props.handleCancel1}>
          <div style={cssStyle.container}>
            <Row style={cssStyle.headerRow}>
                <CloseOutlined onClick={props.handleCancel1} style={{ color:yellowColor }}/>
                
                
            </Row>
            
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Supplier</div>
                <div style={{...cssStyle.fadedContainer,justifyContent:'right'}} ><DownOutlined style={{ color:yellowColor,padding:'10px' }}/></div>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Quantity (g)</div>
                <Input style={cssStyle.fadedContainer} defaultValue={message} onPressEnter={handleChange}></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Fees (%)</div>
                <Input style={cssStyle.fadedContainer} defaultValue={message1} onPressEnter={handleChange1}></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Total Price</div>
                <Input style={cssStyle.fadedContainer} defaultValue={message2} onPressEnter={handleChange2}></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Invoice</div>
                <Row style={{justifyContent:'space-between'}}>
                <div style={{...cssStyle.fadedContainer,flexGrow:'1',marginRight:'10px'}} ><FileAddOutlined style={{ color:yellowColor,padding:'5px',fontSize:'18px',marginRight:'30px'}}/>drag and drop files here</div>
                <div style={{...cssStyle.fadedContainer,padding:'10px'}} ><PlusOutlined style={{ color:yellowColor,fontSize:'18px' }}/></div>
                </Row>
                
            </Row>
            
            
            <div style={{height:'100px'}}/>
            <div className='btn' style={cssStyle.downloadButton} onClick={handleClick}>Confirm Entry</div>   
          </div>
        </PopupModal>
      
    );
}

export default InvPopup