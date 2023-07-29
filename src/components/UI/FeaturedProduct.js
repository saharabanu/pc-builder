import { Col, Row } from "antd"
import ProductCard from "./ProductCard"


const FeaturedProduct = () => {
  return (
    <div className="container-fluid">

    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
        <h2>Featured Products</h2>
    </div>


    <Row gutter={[16, 16]}>
  <Col span={6} ><ProductCard/></Col>
  <Col span={6}>2</Col>
  <Col span={6} >3</Col>
  <Col span={6} >4</Col>
  
</Row>



    </div>
  )
}

export default FeaturedProduct