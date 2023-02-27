import { useEffect } from 'react';
import { toAbsoluteUrl } from '../_metronic/helpers/AssetHelpers.ts';
import { Col } from 'antd';

const Login = () => {
  return (
    <Col style={{alignItems:'center'}}>
    {/* begin::Content */}
    <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
      {/* begin::Logo */}
      <a href='#' className='mb-12'>
        
        <img
          alt='Logo'
          src={toAbsoluteUrl('/images/logo_dark.png')}
          className='theme-light-show h-45px'
        ></img>
      </a>
      {/* end::Logo */}
      {/* begin::Wrapper */}
      <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <form
    className='form w-100'
    id='kt_login_signin_form'
  >
    {/* begin::Heading */}
    <div className='text-center mb-10'>
      <h1 className='text-dark mb-3'>Sign In to Metfolio</h1>
      
    </div>
    {/* begin::Heading */}

    

      {/* begin::Google link */}
      <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
        <img
          alt='Logo'
          src={toAbsoluteUrl('/images/Microsoft_logo.svg.png')}
          className='h-20px me-3'
        />
        Continue with Microsoft
      </a>
      {/* end::Google link */}
    
    {/* end::Action */}
  </form> 
      </div>
      {/* end::Wrapper */}
    </div>
    {/* end::Content */}
    </Col>
    
  );
    };


export { Login };
