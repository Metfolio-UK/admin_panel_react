import React from 'react'
import {  Layout } from 'antd';
import SidebarFixed from '../components/sidebarFixed';
import { Routes, Route } from "react-router-dom";

const Layoutdefiner = (props) => {
  return (
    <Layout hasSider>
        <SidebarFixed width={props.width} open={props.open} onClose={props.onClose}/>
        {props.children}
    </Layout>
  )
}

export default Layoutdefiner