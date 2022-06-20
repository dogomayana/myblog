import React from 'react';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import Link  from 'next/link';
import CookieConsent from 'react-cookie-consent';

// import CookieConsent, { Cookies } from 'react-cookie-consent';
// import Cookies from './Cookies';

const Layout = ({ children }) => (
  <>
  <Meta/>
    <Header/>
    {children}
    <Footer/>
    {/* <CookieConsent */}
      {/* location="bottom" */}
      {/* buttonText="ok" */}
      {/* cookieName="mayana" */}
      {/* style={{ background: "#2B373B", paddingTop: 20, }} */}
      {/* buttonStyle={{ color: "#4e503b", fontSize: "13px"}} */}
      {/* expires={150} */}
     {/* > */}
      {/* This website uses cookies to enhance the user experience.{" "} */}
      {/* <span style={{ fontSize: "15px", marginLeft: '11px', fontStyle:"italic", color: "gold",}}>  */}
      {/* <Link className='underline italic' href={`/privacy/privacyTerms`} passHref>Privacy &amp; terms</Link> */}
      {/* </span> */}
    {/* </CookieConsent> */}
  </>
);

export default Layout;