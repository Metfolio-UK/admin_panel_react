/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react';
import ApexCharts, {ApexOptions} from 'apexcharts';
import {Dropdown1} from '../_metronic/partials/content/dropdown/Dropdown1.tsx';
import {getCSS, getCSSVariableValue} from '../_metronic/assets/ts/_utils/DomHelpers.ts';
import {useThemeMode} from '../_metronic/partials/layout/theme-mode/ThemeModeProvider.tsx';
import { greyColor,blacky, tealColor } from '../const';
import { css } from 'styled-components';

const ChartsWidget1 = ({className}) => {
    const cssStyle = {
        whiteColor:{
            color:'#FFFFFF',
        },
        greyColor:{
            color:'#80808F',
        },
        ratio:{
          color:"#80808F",
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        level:{
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',

        },
        ov:{
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',
          colors: blacky,
          
        }
    };
  const chartRef = useRef(null);
  const {mode} = useThemeMode();

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, 'height'));

    const chart = new ApexCharts(chartRef.current, getChartOptions(height));
    if (chart) {
      chart.render();
    }

    return chart;
  };

  useEffect(() => {
    const chart = refreshChart();
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  return (
    <div style={{marginBottom:'30px'}} className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span style={cssStyle.ov}>Overview</span>

          <span style={cssStyle.ratio}>Buy:Sell Ratio (%)</span>
        </h3>

        {/* begin::Toolbar */}
        <div className='card-toolbar' data-kt-buttons='true'>
          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'
            id='kt_charts_widget_2_year_btn'
            style={cssStyle.greyColor}
          >
            Month
          </a>

          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1'
            id='kt_charts_widget_2_month_btn'
            style={cssStyle.greyColor}
          >
            Week
          </a>

          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-secondary active px-4 me-1'
            id='kt_charts_widget_2_week_btn'
            style={cssStyle.whiteColor}
          >
            Day
          </a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body' >
        {/* begin::Chart */}
        <div ref={chartRef} id='kt_charts_widget_2_chart' style={{height: '360px'}}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export {ChartsWidget1};

function getChartOptions(height) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-warning');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '21px',
          letterSpacing: '0em',
          textAlign: 'left',
          colors: labelColor,
        },
      },
    },
    fill: {
      opacity: 1,
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
    colors: ['#FFA800', tealColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}

