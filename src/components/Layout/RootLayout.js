import { Breadcrumb, Layout,Anchor, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

import React, { useState } from 'react';

import AppNavbar from '../UI/AppNavbar';
import FooterBottom from '../UI/FooterBottom';



const { Link } = Anchor;

const RootLayout = ({children}) => {
  return (
    <>

    <Layout  >
    <Header  className='navbar' style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      backgroundColor: '#fff',
      
    }}>
    
      <AppNavbar/>
    </Header>
    <Content style={{minHeight:"100vh"}}>
      {children}
    </Content>
    <Footer style={{width:"100%", background:"#000" , padding: "5px ", textAlign:"center", color:"#fff", marginTop:"20px"}}>
      <FooterBottom/>
    </Footer>

    </Layout>
    </>
  )
}

export default RootLayout