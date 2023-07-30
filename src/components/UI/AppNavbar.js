import Link from 'next/link';
import { Menu, Button, Drawer, Row, Col } from 'antd';
import { useState } from 'react';
import {
  MenuOutlined,
  SettingOutlined,
  HomeOutlined,
  UserOutlined,
  
} from "@ant-design/icons";
import { useSession, signOut } from 'next-auth/react';


const AppNavbar = () => {
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession()

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  
  return (
    <>


<Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4} xl={12}>
          
            <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px", fontFamily:'Poppins' , fontSize:"30px", fontWeight:'700'}}
            >
              <Link  style={{textDecoration:"none", color: "#fff"}} href="/">TECH</Link>
            </div>
          </Col>
          <Col xs={0} sm={0} md={10}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
        </Menu.Item>
        {/* {session?.user && 
              <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
        </Menu.Item>} */}
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
            <Link href="/categories/powersupply">Power Supply Unit</Link>
          </Menu.Item>
          <Menu.Item key="storage">
            <Link href="/categories/storagedevice">Storage Device</Link>
          </Menu.Item>
          <Menu.Item key="monitor">
            <Link href="/categories/monitor">Monitor</Link>
          </Menu.Item>
          <Menu.Item key="others">
            <Link href="/categories/others">Others</Link>
          </Menu.Item>
        </Menu.SubMenu>
        {session?.user ? <>
          <Button type="primary" danger onClick={() => signOut()} style={{marginTop:'20px'   }}>
            Logout
          </Button>
          <h2 style={{   }}>{session?.user?.name}</h2>
          </>
         : <Menu.Item key="login">
          <Link href="/login">Login</Link>
        </Menu.Item>}
    

        
             
            </Menu>
          </Col>
          
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
            
           
          {session?.user && 
              <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
        </Menu.Item>}
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
        {session?.user ? <>
          <Button type="primary" danger onClick={() => signOut()} style={{marginTop:'20px'   }}>
            Logout
          </Button>
          <h2 style={{   }}>{session?.user?.name}</h2>
          </>
         : <Menu.Item key="login">
          <Link href="/login">Login</Link>
        </Menu.Item>}
    
          </Menu>
        </Drawer>


    </>
  )
}

export default AppNavbar