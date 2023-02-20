import React from 'react';
import '../_metronic/assets/sass/style.scss';
import { getNameInitals, greyColor, nameSymbolColor, paginationColor, tealColor, yellowColor } from '../const';
import { Pagination } from 'antd';
import styled from 'styled-components';


const InvReport = ({ className }) => {
    const cssStyle = {
        greyColor1:{
            color:'#80808F',
        },
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
            padding:'40px 30px',
        }
    };
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      {/*<div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">
            Create Inventory Report
          </span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            Enter grams purchased from suppliers
          </span>
        </h3>

        <div className="card-toolbar">
          <a href="#" className="btn btn-sm btn-light1-primary">
            Start Now
          </a>
        </div>
      </div>
  */}
  <div style={cssStyle.cardpadding} className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Create Inventory Report</span>
          <span className='mt-1 fw-semibold fs-7' style={cssStyle.greyColor1} >Enter grams purchased from suppliers</span>
        </h3>
        <div style={cssStyle.headerRow}>
            <div style={cssStyle.tealButton}>Start Now </div>
        </div>
      </div>
    </div>
  );
};

export { InvReport };
