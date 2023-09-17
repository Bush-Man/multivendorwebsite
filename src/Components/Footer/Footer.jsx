import React from 'react'
import "./Footer.scss";
import FooterTop from './FooterTop.jsx/FooterTop';
import FooterCenter from './FooterCenter.jsx/FooterCenter';
import FooterBottom from './FooterBottom.jsx/FooterBottom';
const Footer = () => {
  return (
      <div className='footer'>
          <div className="container">
          <FooterTop />
              
              <FooterCenter />
              <FooterBottom />
          </div>
    </div>
  )
}

export default Footer