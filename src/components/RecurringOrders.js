/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { getNameInitals, greyColor, nameSymbolColor, paginationColor, tealColor, yellowColor } from '../const';
import { Pagination } from 'antd';
import styled from 'styled-components';


const RecurringOrders = ({className}) => {
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
    const data = [
        {
            name:'Meeren Raniga',
            device:'Android',
            value:'£250.00',
            value_type:'Fixed Fee: £450.00',
            quantity:'34.544 g',
            quantity_type:'PG Account',
            method:'Apple pay',
            method_type:'High Risk',
            order_type: 'Recurring Buy',
            order_acc: 'Daily'
        },
        {
            name:'Shyam Vikram',
            device:'Android',
            value:'$23,000,000',
            value_type:'Fixed Fee: £250.00',
            quantity:'42.343 g',
            quantity_type:'PG Account',
            method:'Card',
            method_type:'Low Risk',
            order_type: 'Recurring Buy',
            order_acc: '17th of every Month'
        },
        {
            name:'Priyen Raniga',
            device:'IOS',
            value:'$540.00',
            value_type:'Fixed Fee: £74.00',
            quantity:'10.456 g',
            quantity_type:'PG Account',
            method:'Card',
            method_type:'Low Risk',
            order_type: 'Recurring Buy',
            order_acc: 'Weekly on Sunday'
        },
        {
            name:'Abhishek Chakram',
            device:'IOS',
            value:'$5000.00',
            value_type:'Fixed Fee: £55.00',
            quantity:'100.000 g',
            quantity_type:'PG Account',
            method:'Barclays',
            method_type:'Medium Risk',
            order_type: 'Recurring Buy',
            order_acc: 'Weekly on Sunday'
        }
    ];
    const cssStyle = {
        greyColor:{
            color:greyColor,
        },
        lightBg:{
            backgroundColor:nameSymbolColor,
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
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div style={cssStyle.cardpadding} className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recurring Orders</span>
          <span className='mt-1 fw-semibold fs-7' style={cssStyle.greyColor} >20 Goals Created last 1 month</span>
        </h3>
        <div style={cssStyle.headerRow}>
            <div style={cssStyle.yellowButton}>Export</div>
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
                <th className='ps-4 min-w-300px rounded-start'>User</th>
                <th className='min-w-125px'>Value (£)</th>
                <th className='min-w-125px'>Last QTY (g)</th>
                <th className='min-w-200px'>Method</th>
                <th className='min-w-150px'>Order Type</th>
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
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.value}
                  </a>
                  <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>{item.value_type}</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.quantity}
                  </a>
                  <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>{item.quantity_type}</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.method}
                  </a>
                  <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>
                  {item.method_type}
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.order_type}
                  </a>
                  <span className=' fw-semibold  d-block fs-7' style={cssStyle.greyColor}>
                  {item.order_acc}
                  </span>
                </td>
              
                <td className='text-end'>
                  <a
                    className='btn'
                  >
                    <div className='btn' style={cssStyle.yellowButton}>View Order</div>

                  </a>
                 
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

export default RecurringOrders

