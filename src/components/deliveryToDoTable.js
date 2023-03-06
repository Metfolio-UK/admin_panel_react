/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { addressColor, getNameInitals, greyColor, nameSymbolColor, paginationColor, sidebarColor, tealColor, yellowColor } from '../const';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ExportDropdown from './exportDropdown';


const DeliveryToDoTable = ({className, tableData}) => {
    const Page = styled(Pagination)`
        & .anticon {
            color: ${yellowColor};
            font-size:20px;
        }
      
        & .ant-pagination-item{
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 0em;
            align-item:center;
            height:20px;
            background-color:${paginationColor};
        }
        & .ant-pagination-item-active:hover{
            border-color:${yellowColor};
        }
        & .ant-pagination-item-active{
            border-color:${yellowColor};
        }
    `;
    const data = tableData;
    const cssStyle = {
        greyColor:{
            color:greyColor,
        },
        lightBg:{
            backgroundColor:nameSymbolColor,
        },
        addressContainer:{
            display:'flex',
            flexDirection:'column',
            padding:'10px 16px',
            backgroundColor: addressColor,
            borderRadius:'10px',
            fontFamily:'Poppins',
            fontSize:'12px',
            fontWeight:'400',
            color: sidebarColor,
        },
        nameSymbol:{
            display:'flex',
            height:'50px',
            width:'50px',
            backgroundColor:nameSymbolColor,
            justifyContent:'center',
            alignItems:'center',
            marginRight:'14px',
            borderRadius:'6px',
            fontFamily:'Poppins',
            fontSize:'24px',
            fontWeight:'600',
            border:`1px solid ${yellowColor}`
        },
        headerRow:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
        },
        btnCol:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        },
        yellowButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'8px 16px',
            backgroundColor:yellowColor,
            borderRadius:'6px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0em',
            color:'white',
            cursor:'pointer',
        },
        navyButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'8px 16px',
            backgroundColor:sidebarColor,
            borderRadius:'6px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0em',
            color:'white',
            cursor:'pointer',
        },
        tealButton:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding:'8px 19px',
            backgroundColor:tealColor,
            borderRadius:'6px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0em',
            color:'white',
        },
        antPaginationPrev:{
            color:yellowColor
        },
        cardpadding:{
            padding:'0 1.5rem',
        }
    };
  return (
    <div className={`card ${className}`} >
      {/* begin::Header */}
      <div style={cssStyle.cardpadding} className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span style={{fontSize:'18px',fontWeight:'500',lineHeight:'21px'}}>Deliveries (to do)</span>
          <span className='mt-1 fw-semibold fs-7' style={cssStyle.greyColor} >20 Outstanding Deliveries</span>
        </h3>
        <div style={cssStyle.headerRow}>
            <ExportDropdown children={
              <div style={cssStyle.yellowButton}>Export</div>
            }/>
            <div style={{width:'10px'}}></div>
            <div style={cssStyle.tealButton}>Create</div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div style={cssStyle.cardpadding} className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold' style={{...cssStyle.greyColor,...cssStyle.lightBg}}>
                <th className='ps-4 min-w-250px rounded-start' style={{color:'black'}}>User</th>
                <th className='min-w-250px'>Address</th>
                <th className='min-w-150px'>Quantity (g)</th>
                <th className='min-w-200px'>Deliver from</th>
                <th className='min-w-125px'>Timestamp</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {
                data.map((item)=>
                <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div style={cssStyle.nameSymbol}>
                        {
                            getNameInitals(item.name)
                        }
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        {item.name}
                      </a>
                      <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>
                      {item.device}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                    <div style={cssStyle.addressContainer}>
                        <div>Home Address</div>
                        <div style={{height:'12px'}}/>
                        <div>Postcode: {item.postcode}</div>
                        <div>Address Line 1: {item.address}</div>
                        
                    </div>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.quantity}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.deliver_from}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.createdon}
                  </a>
                  <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>
                  {item.time}
                  </span>
                </td>
              
                <td className='text-end'>        
                    <div style={cssStyle.btnCol}>
                        <div className='btn' style={cssStyle.yellowButton}>View Order</div>
                        <div style={{height:'10px'}}/>
                        <div className='btn' style={cssStyle.navyButton}>Mark Done</div>
                    </div>
                </td>
              </tr>)
                }
              
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
        <Page style={{textAlign:'right'}} size='small' defaultCurrent={1} total={400} pageSize={4} showSizeChanger={false} />
      </div>
      {/* begin::Body */}
    </div>
  )
}

export default DeliveryToDoTable

