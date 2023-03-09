import React from 'react'
import { SearchOutlined,MenuOutlined } from '@ant-design/icons';
import { Col,Row } from 'antd';
import { dashColor, greyColor, isMobile, sidebarColor,yellowColor } from '../const';
import { Input } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
                  <Row style={{
            padding:'12px 30px',justifyContent:'space-between',
            backgroundColor:'white'
          }}>
            <Col >
              <div style={{
                fontFamily:'Poppins',
                fontSize:'18px',
                fontWeight:'600',
                textAlign:'left'
              }}>{props.heading}</div>
              <Row gutter={2} style={{
                alignItems:'center'
              }}>
              <div style={{
                fontFamily:'Poppins',
                fontSize:'12px',
                fontWeight:'500',
                color:greyColor,
                textAlign:'left',
                marginRight:'4px'
              }}>Home</div>
              <div style={{
                width:'5px',
                height:'2.5px',
                backgroundColor:dashColor,
                borderRadius:'6px',
                marginRight:'4px'
              }}/>
              <div style={{
                fontFamily:'Poppins',
                fontSize:'12px',
                fontWeight:'500',
                textAlign:'left'
              }}>{props.heading}</div>
              </Row>
            </Col>
{/* { !isMobile(props.width) &&
            <Input style={{width:'240px', borderRadius:'12px', height:'40px', border:'1px solid black' }} size="large" placeholder="Search Metfolio"  prefix={<SearchOutlined style={{color:yellowColor, fontSize:'28px'}}  />} />
}             */}
            { !isMobile(props.width) && <Row>
              <div style={{
                height:'40px',
                paddingLeft:'12px',
                paddingRight:'12px',
                fontFamily:'Poppins',
                fontSize:'16px',
                fontWeight:'700',
                backgroundColor: yellowColor,
                borderRadius:'4px',
                color:'white',
                display:'flex',
                alignItems:'center',
                marginRight:'8px'
              }}>
              Gold(g) ~ £49.56
              </div>
              <Link to='/profile'>
                <div className='btn' style={{
                  height:'40px',
                  width:'36px',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor: sidebarColor,
                  border:`1px solid ${yellowColor}`
                }}>
                  <UserOutlined style={{ fontSize:'20px', color:'white' }}/>
                </div>
              </Link>
            </Row>}
            {
              isMobile(props.width) && 
              <Row>
                <Link to='/profile'>
                  <div className='btn' style={{
                    height:'40px',
                    width:'36px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    marginRight:'8px',
                    backgroundColor: sidebarColor,
                    border:`1px solid ${yellowColor}`
                    }}>
                    <UserOutlined style={{ fontSize:'20px', color:'white' }}/>
                  </div>
                </Link>
                <div 
              onClick={props.showDrawer}
               style={{
                height:'40px',
                paddingLeft:'12px',
                paddingRight:'12px',
                fontFamily:'Poppins',
                fontSize:'16px',
                fontWeight:'700',
                backgroundColor: yellowColor,
                borderRadius:'4px',
                color:'white',
                display:'flex',
                alignItems:'center',
              }}>
             <MenuOutlined />
              </div>
              </Row>
            }
          </Row>
          {/* { isMobile(props.width) &&
          <div style={{
            padding:'0px 30px 12px 30px',
            backgroundColor:'white',
          }}>
            <Input style={{ borderRadius:'12px', height:'40px' , border:'1px solid black' }} size="large" placeholder="Search Metfolio"  prefix={<SearchOutlined style={{color:yellowColor, fontSize:'28px'}}  />} />

          </div>
}    */}
    </div>
  )
}

export default Navbar