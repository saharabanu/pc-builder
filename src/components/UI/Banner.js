import { Button, Carousel, Col, Row } from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
import Image from 'next/image';
import DrawingImage from  "@/assets/images/banner-1.jpg"
import Link from 'next/link';



const Banner = () => {
  return (
    <div style={{  height:"400px"}} className='container-fluid' >

<Carousel autoplay>
   
<div >
    <Row>
        <Col
          lg={{
            span: 8,
          }}
         >
          <div style={{paddingTop:"10%"}}>
          <h1 style={{fontSize:"40px"}}>Build Your PC According  <br />to Your Choice</h1>
          
         
          <Button style={{background:"#764ABC",padding:"18px 10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"16px", marginRight:"5px",border:"none"}}>
         <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold", textDecoration:"none", border:"none"}} href="/pc-builder">PC Builder</Link>
         </Button>
          </div>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          
        >
          <div style={{paddingTop:"10%"}}>
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" width={800} height={300} alt="drawing_image" />
          </div>
        </Col>
      </Row>
    </div>
<div >
    <Row>
        <Col
          lg={{
            span: 8,
          }}
         >
          <div style={{paddingTop:"10%"}}>
          <h1 style={{fontSize:"40px"}}>Build Your PC According  <br />to Your Choice</h1>
          
         
          <Button style={{background:"#764ABC",padding:"18px 10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"16px", marginRight:"5px",border:"none"}}>
         <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold", textDecoration:"none", border:"none"}} href="/pc-builder">PC Builder</Link>
         </Button>
          </div>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          
        >
          <div style={{paddingTop:"10%"}}>
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" width={800} height={300} alt="drawing_image" />
          </div>
        </Col>
      </Row>
    </div>
<div >
    <Row>
        <Col
          lg={{
            span: 8,
          }}
         >
          <div style={{paddingTop:"10%"}}>
          <h1 style={{fontSize:"40px"}}>Build Your PC According  <br />to Your Choice</h1>
          
         
          <Button style={{background:"#764ABC",padding:"18px 10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"16px", marginRight:"5px",border:"none"}}>
         <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold", textDecoration:"none", border:"none"}} href="/pc-builder">PC Builder</Link>
         </Button>
          </div>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          
        >
          <div style={{paddingTop:"10%"}}>
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" width={800} height={300} alt="drawing_image" />
          </div>
        </Col>
      </Row>
    </div>
<div >
    <Row>
        <Col
          lg={{
            span: 8,
          }}
         >
          <div style={{paddingTop:"10%"}}>
          <h1 style={{fontSize:"40px"}}>Build Your PC According  <br />to Your Choice</h1>
          
         
          <Button style={{background:"#764ABC",padding:"18px 10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"16px", marginRight:"5px",border:"none"}}>
         <Link style={{color:"#fff", fontSize:"20px", fontWeight:"bold", textDecoration:"none", border:"none"}} href="/pc-builder">PC Builder</Link>
         </Button>
          </div>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          
        >
          <div style={{paddingTop:"10%"}}>
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" width={800} height={300} alt="drawing_image" />
          </div>
        </Col>
      </Row>
    </div>

   
    
    
    
  </Carousel>
    </div>
  )
}

export default Banner