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
    <Header >
    
      <AppNavbar/>
    </Header>
    <Content style={{minHeight:"100vh"}}>
      {children}
    </Content>
    <Footer>
      <FooterBottom/>
    </Footer>

    </Layout>
    </>
  )
}

export default RootLayout