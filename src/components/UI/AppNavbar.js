import Link from 'next/link';
import { Menu, Button, Drawer, Row, Col } from 'antd';
import { useState } from 'react';
import {
  MenuOutlined,
  SettingOutlined,
  HomeOutlined,
  UserOutlined,
  
} from "@ant-design/icons";

const AppNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  
  return (
    <>


<Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px", fontFamily:'Poppins' , fontSize:"30px", fontWeight:'700'}}
            >
              Tech
            </div>
          </Col>
          <Col xs={0} sm={0} md={10}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="home"  >
          <Link href="/">Home</Link>
          
        </Menu.Item>
              <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
        </Menu.Item>
        <Menu.SubMenu key="categories" title="Categories">
          <Menu.Item key="cpu">
            <Link href="/categories/cpu">CPU / Processor</Link>
          </Menu.Item>
          <Menu.Item key="motherboard">
            <Link href="/categories/motherboard">Motherboard</Link>
          </Menu.Item>
          <Menu.Item key="ram">
            <Link href="/categories/ram">RAM</Link>
          </Menu.Item>
          <Menu.Item key="psu">
            <Link href="/categories/psu">Power Supply Unit</Link>
          </Menu.Item>
          <Menu.Item key="storage">
            <Link href="/categories/storage">Storage Device</Link>
          </Menu.Item>
          <Menu.Item key="monitor">
            <Link href="/categories/monitor">Monitor</Link>
          </Menu.Item>
          <Menu.Item key="others">
            <Link href="/categories/others">Others</Link>
          </Menu.Item>
        </Menu.SubMenu>
              {/* <Menu.Item key="4">
                <Button type="primary" style={{ marginRight: "10px" }}>
                  Sign in
                </Button>
                
              </Menu.Item> */}
            </Menu>
          </Col>
          {/* <Col xs={20} sm={20} md={1}>
          <Button type="primary" style={{ marginRight: "10px" }}>
                  Sign in
                </Button>
          </Col> */}
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            
            <Menu.Item key="home">
          <Link href="/">Home</Link>
          
        </Menu.Item>
        <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
          
        </Menu.Item>
        <Menu.SubMenu key="categories" title="Categories">
          <Menu.Item key="cpu">
            <Link href="/categories/cpu">CPU / Processor</Link>
          </Menu.Item>
          <Menu.Item key="motherboard">
            <Link href="/categories/motherboard">Motherboard</Link>
          </Menu.Item>
          <Menu.Item key="ram">
            <Link href="/categories/ram">RAM</Link>
          </Menu.Item>
          <Menu.Item key="psu">
            <Link href="/categories/psu">Power Supply Unit</Link>
          </Menu.Item>
          <Menu.Item key="storage">
            <Link href="/categories/storage">Storage Device</Link>
          </Menu.Item>
          <Menu.Item key="monitor">
            <Link href="/categories/monitor">Monitor</Link>
          </Menu.Item>
          <Menu.Item key="others">
            <Link href="/categories/others">Others</Link>
          </Menu.Item>
        </Menu.SubMenu>
            <Menu.Item key="4">
              <Button type="primary" style={{ marginRight: "10px" }}>
                Sign in
              </Button>
             
            </Menu.Item>
          </Menu>
        </Drawer>


    </>
  )
}

export default AppNavbar