import { Carousel, Col, Row } from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
import Image from 'next/image';
import DrawingImage from  "@/assets/images/banner-1.jpg"



const Banner = () => {
  return (
    <div className='container-fluid'>

<Carousel autoplay>
    <div >
    <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum vitae possimus dignissimos ex. Fugit maxime necessitatibus ratione suscipit exercitationem!</h2>
          
          <p style={{ fontSize: "20px" }}>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              
             
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
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
            span: 8,
          }}
        >
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum vitae possimus dignissimos ex. Fugit maxime necessitatibus ratione suscipit exercitationem!</h2>
          
          <p style={{ fontSize: "20px" }}>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              
             
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
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
            span: 8,
          }}
        >
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum vitae possimus dignissimos ex. Fugit maxime necessitatibus ratione suscipit exercitationem!</h2>
          
          <p style={{ fontSize: "20px" }}>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              
             
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
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