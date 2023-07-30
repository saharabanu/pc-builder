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
    <div className='container-fluid' style={{}}>

<Carousel autoplay>
   
<div >
    <Row>
        <Col
          lg={{
            span: 12,
          }}
         >
          <h4 style={{margin:"30px 0"}}>MANY OF US use computers every day, but never really get into the guts of how they work. Sometimes, it’s nice to make something with your own hands that you will  use every day</h4>
          
         
          <Link href="/pc-builder" style={{
              textDecoration:"none", background:"#000", color:"#fff", padding:"10px",borderRadius:"5px",margin:"20px 0" 
            }}>
            PC BUILDER
         
          </Link>
        </Col>

        <Col
          lg={{
            span: 12,
          }}
          
        >
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
<div >
    <Row>
        <Col
          lg={{
            span: 12,
          }}
         >
          <h4 style={{margin:"30px 0"}}>MANY OF US use computers every day, but never really get into the guts of how they work. Sometimes, it’s nice to make something with your own hands that you will  use every day</h4>
          
         
          <Link href="/pc-builder" style={{
              textDecoration:"none", background:"#000", color:"#fff", padding:"10px",borderRadius:"5px",margin:"20px 0" 
            }}>
            PC BUILDER
         
          </Link>
        </Col>

        <Col
          lg={{
            span: 12,
          }}
          
        >
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
<div >
    <Row>
        <Col
          lg={{
            span: 12,
          }}
         >
          <h4 style={{margin:"30px 0"}}>MANY OF US use computers every day, but never really get into the guts of how they work. Sometimes, it’s nice to make something with your own hands that you will  use every day</h4>
          
         
          <Link href="/pc-builder" style={{
              textDecoration:"none", background:"#000", color:"#fff", padding:"10px",borderRadius:"5px",margin:"20px 0" 
            }}>
            PC BUILDER
         
          </Link>
        </Col>

        <Col
          lg={{
            span: 12,
          }}
          
        >
          <Image src="https://previews.123rf.com/images/miloushek/miloushek1011/miloushek101100013/8261073-computer-set.jpg" fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
   
    
    
    
  </Carousel>
    </div>
  )
}

export default Banner