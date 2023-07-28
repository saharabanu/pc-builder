import { Breadcrumb, Layout,Anchor, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

import React, { useState } from 'react';

import AppNavbar from '../UI/AppNavbar';



const { Link } = Anchor;

const RootLayout = ({children}) => {
  return (
    <>

    <Layout  >
    <Header >
    
      <AppNavbar/>
    </Header>
    <Content>
      {children}
    </Content>
    <Footer>
      <p> This is Footer</p>
    </Footer>

    </Layout>
    </>
  )
}

export default RootLayout