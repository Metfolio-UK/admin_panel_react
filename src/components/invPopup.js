import React, {useState} from 'react'
import { Row,Col, Modal, Input, Dropdown } from 'antd';
import styled from 'styled-components';
import { CloseOutlined,PlusOutlined,FileAddOutlined,DownOutlined } from '@ant-design/icons';
import { dropdownSelectedColor, getNameInitals, greyButtonColor, greyColor, greyinput, nameSymbolColor, navyColor, yellowColor } from '../const';
import { InventoryTableData } from '../helpers/dummydata';
const PopupModal = styled(Modal)`
        & .ant-modal-content {
            padding:0px;
        }
    `;
const InvPopup = (props) => {
      const [supplier, setSupplier] = useState('');
      const [quantity, setQuantity] = useState('');
      const [fees, setFees] = useState('');
      const [total_price, setTotalPrice] = useState('');
      const [open, setOpen] = useState(false);


      const submit = () => {
        var today = new Date();
        var current_time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var current_date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        const newItem = {
          name: 'Meeren Raniga',
          device: 'Super Admin',
          value: '£'+total_price,
          quantity: quantity+' g',
          supplier: supplier,
          time: current_time,
          date: current_date,
        };
        InventoryTableData.push(newItem);
        props.handleCancel1();
      };
      

    
        
    const CustomRow = styled(Row)`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2px;
        margin-bottom: 6px;
        border-radius: 6px;
        padding: 4px;
        &:hover{
            background-color:${dropdownSelectedColor};
            cursor:pointer;
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
            border: `1px solid ${greyinput}`
        },
        dropdownContainer:{
            display: 'flex',
            flexDirection:'column',
            padding:'8px',
            backgroundColor:'white',
            borderRadius:'10px',
        },
        rowText:{
          marginLeft:'4px',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '0em',
          color: "black",
        },
       
    };
    return (

        
        <PopupModal  closable={false} footer={null} width={320}  open={props.isModalOpen1} onOk={props.handleOk1} onCancel={props.handleCancel1}>
          <div style={cssStyle.container}>
            <Row style={cssStyle.headerRow}>
                <CloseOutlined onClick={props.handleCancel1} style={{ color:yellowColor }}/>
            </Row>
            
            <Row style={cssStyle.contentRow}>
            <div style={cssStyle.navyText}>Supplier</div>
            <Dropdown 
              onOpenChange={(curr)=>{ setOpen(curr); }}
              open={open}
              dropdownRender={() => (
                <div style={cssStyle.dropdownContainer}>
                    <CustomRow onClick={()=>{ setOpen(false); setSupplier('Baird & Co LTD'); }}>
                        <div style={cssStyle.rowText} >Baird & Co LTD</div>
                    </CustomRow>
                </div>
            )}
            trigger={['click']}>
                <div style={{...cssStyle.fadedContainer,justifyContent:'space-between'}} >
                  <div style={{ marginLeft:'8px' }}>{supplier}</div>
                  <DownOutlined style={{ color:yellowColor,marginRight:'8px' }}/></div>
            </Dropdown>
                
                
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Quantity (g)</div>
                <Input style={cssStyle.fadedContainer} 
                  onChange={(e)=>{
                    setQuantity(e.target.value);
                  }}
                ></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Fees (%)</div>
                <Input style={cssStyle.fadedContainer}
                  onChange={(e)=>{
                    setFees(e.target.value);
                  }}
                ></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Total Price</div>
                <Input style={cssStyle.fadedContainer} 
                  onChange={(e)=>{
                    setTotalPrice(e.target.value);
                  }}
                ></Input>
            </Row>
            <Row style={cssStyle.contentRow}>
                <div style={cssStyle.navyText}>Invoice</div>
                <Row style={{justifyContent:'space-between'}}>
                  <div style={{...cssStyle.fadedContainer,flexGrow:'1',marginRight:'10px'}} ><FileAddOutlined style={{ color:yellowColor,padding:'5px',fontSize:'18px',marginRight:'30px'}}/>drag and drop files here</div>
                  <div style={{...cssStyle.fadedContainer,padding:'10px'}} ><PlusOutlined style={{ color:yellowColor,fontSize:'18px' }}/></div>
                </Row>
                
            </Row>
            
            
            <div style={{height:'80px'}}/>
            <div className='btn' style={cssStyle.downloadButton} onClick={submit}>Confirm Entry</div>   
          </div>
        </PopupModal>
      
    );
}

export default InvPopup