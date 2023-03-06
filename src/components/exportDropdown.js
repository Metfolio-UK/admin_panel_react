import React from 'react'
import { Dropdown,Row } from 'antd'
import { dropdownSelectedColor, gray2Color, greenColor, greyColor } from '../const';
import { Html5Outlined,FileTextOutlined,FileExcelOutlined,FileExcelFilled,DiffFilled } from '@ant-design/icons';
import styled from 'styled-components';
const ExportDropdown = (props) => {
    const CustomRow = styled(Row)`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 6px;
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
            display: 'flex',
            flexDirection:'column',
            padding:'16px',
            backgroundColor:'white',
            borderRadius:'12px',
        },
        heading:{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0em',
            color: greyColor,
        },
        rowText:{
            marginLeft:'4px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0em',
            color: "black",
        },
        row:{
            display: 'flex',
            flexDirection:'row',
            alignItems:'center',
            marginTop:'6px',
            marginBottom:'6px',
            borderRadius:'8px'
        },
       
      };
  return (
    <Dropdown 
        dropdownRender={() => (
            <div style={cssStyle.container}>
                <div style={cssStyle.heading}>Export All Data</div>
                <CustomRow >
                    <Html5Outlined style={{color:"lightblue" }}/>
                    <div style={cssStyle.rowText} >HTML</div>
                </CustomRow>
                <CustomRow >
                    <DiffFilled style={{color:'burlywood' }}/>
                    <div style={cssStyle.rowText} >CSV</div>
                </CustomRow>
                <CustomRow >
                    <FileTextOutlined style={{color:gray2Color }}/>
                    <div style={cssStyle.rowText} >Text</div>
                </CustomRow>
                <CustomRow >
                    <FileExcelOutlined style={{color:greenColor }}/>
                    <div style={cssStyle.rowText} >Excel 95+</div>
                </CustomRow>
                <CustomRow >
                    <FileExcelFilled style={{color:greenColor }}/>
                    <div style={cssStyle.rowText} >Excel 2007+</div>
                </CustomRow>
                
            </div>
        )}
    >
        {props.children}
    </Dropdown>
  )
}

export default ExportDropdown