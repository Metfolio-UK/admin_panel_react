/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../_metronic/assets/ts/_utils/DomHelpers.ts';
import { getNameInitals, greyColor, nameSymbolColor, navyColor, paginationColor, seeall, tealColor, userbasechartColor, yellowColor } from '../const';
import { Row,Col } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const BuyOrderChart = ({ chartColor, chartHeight, changeMenu, scrollToPosition}) => {
  const chartRef = useRef(null);
  const cssStyle = {
    
    
    whiteContainer:{
        display: 'flex',
        flexDirection:'column',
        padding:'32px',
        justifyContent:'space-between',
        backgroundColor:'white',
        borderRadius:'0px 0px 12px 12px',
        // top:'-10px'
    },
    fadedText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        // textAlign: 'left',
        color:greyColor,
    },
    navyText:{
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '30px',
        letterSpacing: '0em',
        // textAlign: 'right',
        color:navyColor,
    },
    WhiteHeadText:{
        fontFamily: 'Poppins',
        fontSize: '17px',
        fontWeight: '600',
        lineHeight: '25.5px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:"white",
    },
    WhiteSubHeadText:{
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:"white",
    },
    header:{
        display: 'flex',
        flexDirection:'row',
        padding:'32px',
        justifyContent:'space-between',
        backgroundColor: yellowColor,
        borderRadius:'12px 12px 0px 0px',
    },
    seeAll:{
        width:'75px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: seeall,
        borderRadius:'20px',
        height:'24px',
        fontFamily:'Poppins',
        fontSize: '12px',color:'white',
fontWeight: '500',
lineHeight: '18px',
letterSpacing: '0em',
    },
  };
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart1 = new ApexCharts(chartRef.current, chart1Options(chartColor, chartHeight))
    if (chart1) {
      chart1.render()
    }

    return chart1
  }

  useEffect(() => {
    const chart1 = refreshChart()

    return () => {
      if (chart1) {
        chart1.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div >
      <Row style={cssStyle.header}>
        <Col>
            <div style={cssStyle.WhiteHeadText}>Buy Orders</div>
            <div style={cssStyle.WhiteSubHeadText}>All Time</div>
        </Col>
        <Link to='/orders'>
        <Row onClick={()=>{
          changeMenu(1);
          scrollToPosition('buy_table');
        }} style={cssStyle.seeAll}>
            <div style={{marginRight:'4px'}}>See All</div>
            <ArrowRightOutlined/>
        </Row>
        </Link>
      </Row>
      <div>
        <div ref={chartRef} ></div>
        <Col style={cssStyle.whiteContainer}>
            <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'left'}}>Total Buy Orders</div>
                    <div style={{...cssStyle.navyText, textAlign:'left'}}>??45,000</div>
                </Col>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'right'}}>Total QTY (gram)</div>
                    <div style={{...cssStyle.navyText, textAlign:'right'}}>700 g</div>
                </Col>
            </Row>
            <Row style={{marginTop:'12px', display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'left'}}>AVG Buy QTY</div>
                    <div style={{...cssStyle.navyText, textAlign:'left'}}>45g</div>
                </Col>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'right'}}>AVG Buy Price</div>
                    <div style={{...cssStyle.navyText, textAlign:'right'}}>??45.67/g</div>
                </Col>
            </Row>
        </Col>
      </div>
    </div>
  )
}

const chart1Options = (chartColor, chartHeight) => {
  const labelColor = getCSSVariableValue('black')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 30, 60, 25, 25, 40],
      },
    ],
    chart: {
        events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          background: yellowColor,
      fontFamily: 'Poppins',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: ["black"],
    },
    fill: {
        type: "solid",
        colors: ['#fff'],
        opacity:1,
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        
      },
    
    },
    yaxis: {
      min: 0,
      max: 65,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: ["black"],
  }
}

export default BuyOrderChart
