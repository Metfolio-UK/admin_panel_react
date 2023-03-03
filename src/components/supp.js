import { Row,Col } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { blacky, getNameInitals, greyButtonColor, greyColor, nameSymbolColor, navyColor, paginationColor, tealColor, yellowColor } from '../const';

const Supp = () => {

  const cssStyle = {
    container : {
        display: 'flex',
        flexDirection:'column',
        height:'304px',
        backgroundColor:'white',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21px',
        
        letterSpacing: '0em',
        color:blacky,
        borderRadius:'12px',
        padding:'24px 20px',
        justifyContent:'space-between',
    },
    titleText:{
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21px',
        
        letterSpacing: '0em',
        color:blacky,
    },
    fadedContainer:{
        display: 'flex',
        flexDirection:'row',
        height:'43px',
        backgroundColor:nameSymbolColor,
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '18px',
        alignItems: 'center',
        letterSpacing: '0em',
        color:navyColor,
        borderRadius:'6px',
        marginTop:'20px',
        padding:'20px',
        justifyContent:'space-between',

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
    headerRow:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    whiteContainer:{
        display: 'flex',
        flexDirection:'column',
        height:'204px',
        backgroundColor:'white',
        borderRadius:'12px',
        padding:'32px',
        top:'-20px',
        justifyContent:'space-between'
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
    }
  };

  return (

    <Col>
    <Col style={cssStyle.container}>
        <Row style={{justifyContent:'space-between'}}>
            <Col>
            <div style={cssStyle.titleText}>Suppliers</div>
        <div style={cssStyle.fadedText}>1 supplier</div>
        </Col>
        
        <Row style={cssStyle.headerRow}>
            <div style={cssStyle.yellowButton}>Export</div>
            <div style={{width:'10px'}}></div>
            <div style={cssStyle.tealButton}>Create</div>
        </Row>
        </Row>
        
        <div style={cssStyle.fadedContainer}>Supplier</div>
        <div className='d-flex align-items-center' style={{paddingBottom: '140px',marginTop:'20px'}}>
                    <div style={cssStyle.nameSymbol}>
                        {
                            getNameInitals('Baird and Co')
                        }
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6' >
                        {'Baird and Co LTD'}
                      </a>
                      <span style={cssStyle.fadedText}>London</span>
                      </div>
                      </div>
        
    </Col>
    {/*<Col style={cssStyle.whiteContainer}>
        <div style={cssStyle.fadedContainer}>Supplier</div>
        <div className='d-flex align-items-center' style={{paddingBottom: '140px',marginTop:'20px'}}>
                    <div style={cssStyle.nameSymbol}>
                        {
                            getNameInitals('Baird and Co')
                        }
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6' >
                        {'Baird and Co LTD'}
                      </a>
                      <span style={cssStyle.fadedText}>London</span>
                      </div>
                      </div>
                    </Col>*/}
    </Col>
  )
}

export default Supp