import Link from "next/link";
import { Menu, Button, Drawer, Row, Col } from "antd";
import { useState } from "react";
import { MenuOutlined, SettingOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useSession, signOut } from "next-auth/react";

const AppNavbar = () => {
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className="navbar"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#fff",
        // padding: '0 20px',
      }}
    >
      <Row justify="space-between" align="middle">
        <Col xs={20} sm={20} md={4}>
          <div
            className="logo"
            style={{
              color: "white",
              paddingLeft: "20px",
              fontFamily: "Poppins",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#764ABC",
                fontSize: "40px",
                fontFamily: "Cedarville Cursive",
              }}
              href="/"
            >
              PC
            </Link>
          </div>
        </Col>


        <Col xs={0} sm={0} md={10} >
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={["1"]}>
         
        
            {session?.user && (
              
              <Button style={{background:"#764ABC",padding:"18px 10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"16px", marginRight:"5px"}}>
         <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/pc-builder">PC Builder</Link>
         </Button>
              
            )}
            <Menu.SubMenu key="categories" title="Categories" theme='dark' style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}}>
              <Menu.Item key="cpu">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/cpu">CPU / Processor</Link>
              </Menu.Item>
              <Menu.Item key="motherboard">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/motherboard">Motherboard</Link>
              </Menu.Item>
              <Menu.Item key="ram">
                <Link  style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/ram">RAM</Link>
              </Menu.Item>
              <Menu.Item key="psu">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/powersupply">Power Supply Unit</Link>
              </Menu.Item>
              <Menu.Item key="storage">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/storagedevice">Storage Device</Link>
              </Menu.Item>
              <Menu.Item key="monitor">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/monitor">Monitor</Link>
              </Menu.Item>
              <Menu.Item key="others">
                <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}} href="/categories/others">Others</Link>
              </Menu.Item>
            </Menu.SubMenu>
            {session?.user ? (
              <>
                <Button
                  type="danger"
                  danger
                  onClick={() => signOut()}
                  style={{ marginTop: "20px" }}
                >
                  Logout
                </Button>
                <span style={{}}>{session?.user?.name}</span>
              </>
            ) : (
              
                <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/login">Login</Link>
              
            )}
          </Menu>
        </Col>

        <Col xs={2} sm={2} md={0}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </Col>
      </Row>



      <Drawer title="Menu" placement="right" onClick={onClose} onClose={onClose} visible={visible}>
        <Menu mode="vertical" defaultSelectedKeys={["1"]}>
          {session?.user && (
            
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/pc-builder">PC Builder</Link>
            
          )}
          <Menu.SubMenu key="categories" title="Categories">
            <Menu.Item key="cpu">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/cpu">CPU / Processor</Link>
            </Menu.Item>
            <Menu.Item key="motherboard">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/motherboard">Motherboard</Link>
            </Menu.Item>
            <Menu.Item key="ram">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/ram">RAM</Link>
            </Menu.Item>
            <Menu.Item key="psu">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/psu">Power Supply Unit</Link>
            </Menu.Item>
            <Menu.Item key="storage">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/storage">Storage Device</Link>
            </Menu.Item>
            <Menu.Item key="monitor">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/monitor">Monitor</Link>
            </Menu.Item>
            <Menu.Item key="others">
              <Link style={{color:"#764ABC", fontSize:"20px", fontWeight:"bold"}} href="/categories/others">Others</Link>
            </Menu.Item>
          </Menu.SubMenu>
          {session?.user ? (
            <>
              <Button type="primary" danger onClick={() => signOut()} style={{ background:"" }}>
                Logout
              </Button>
              <h2 style={{}}>{session?.user?.name}</h2>
            </>
          ) : (
            <Menu.Item key="login">
              <Link href="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

export default AppNavbar;
