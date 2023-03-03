/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../_metronic/assets/ts/_utils/DomHelpers.ts';
import { getNameInitals, greyColor, nameSymbolColor, navyColor, paginationColor, tealColor, userbasechartColor, yellowColor } from '../const';
import { Row,Col } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const UserBaseChart = ({ chartColor, chartHeight, changeMenu, scrollToPosition}) => {
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
        backgroundColor: userbasechartColor,
        borderRadius:'12px 12px 0px 0px',
    },
    seeAll:{
        width:'75px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: yellowColor,
        borderRadius:'20px',
        height:'24px',
        fontFamily:'Poppins',
        fontSize: '12px',
        color:'white',
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
    <div>
      <Row style={cssStyle.header}>
        <Col>
            <div style={cssStyle.WhiteHeadText}>User Base</div>
            <div style={cssStyle.WhiteSubHeadText}>All Time</div>
        </Col>
        <Link to='/users'>
        <Row onClick={()=>{
          changeMenu(2);
          scrollToPosition('user_table');
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
                    <div style={{...cssStyle.fadedText, textAlign:'left'}}>Total Users</div>
                    <div style={{...cssStyle.navyText, textAlign:'left'}}>556</div>
                </Col>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'right'}}>QTY Sold (gram)</div>
                    <div style={{...cssStyle.navyText, textAlign:'right'}}>756.565 g</div>
                </Col>
            </Row>
            <Row style={{marginTop:'12px', display:'flex', flexDirection:'row', justifyContent:'space-between', flexGrow:1}}>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'left'}}>AVG Sell QTY</div>
                    <div style={{...cssStyle.navyText, textAlign:'left'}}>22.345 g</div>
                </Col>
                <Col>
                    <div style={{...cssStyle.fadedText, textAlign:'right'}}>Average Sell Price</div>
                    <div style={{...cssStyle.navyText, textAlign:'right'}}>£45.69/g</div>
                </Col>
            </Row>
        </Col>
      </div>
    </div>
  )
}

const chart1Options = (chartColor, chartHeight) => {

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
      fontFamily: 'Poppins',
      type: 'area',
      height: chartHeight,
      background:userbasechartColor,
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
    fill: {
        type: "solid",
        colors: ['#000'],
        opacity:1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: ["white"],
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
            fontFamily:'Poppins',
          colors: "black",
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
            fontFamily:'Poppins',
            colors: "black",
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

export default UserBaseChart
