import { Col, Row } from "antd"
import ProductCard from "./ProductCard"


const FeaturedProduct = () => {
  return (
    <div className="container-fluid">

    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
        <h2>Featured Products</h2>
    </div>


    <Row gutter={[16, 16]}>
  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} ><ProductCard/></Col>
  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} ><ProductCard/></Col>
  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} ><ProductCard/></Col>
  <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} ><ProductCard/></Col>
  
  
</Row>



    </div>
  )
}

export default FeaturedProduct